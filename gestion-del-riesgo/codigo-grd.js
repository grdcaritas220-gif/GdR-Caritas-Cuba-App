/* ============================================================
   codigo-grd.js — código de participante y línea de avance.
   Lo usan el curso (gestion-del-riesgo/index.html) y la app (bitácora).
   Sin nombres: el código identifica, la bitácora del coordinador sabe de quién es.
   ============================================================ */
(function (global) {
  'use strict';

  // Prefijos = código de cada Cáritas Local (datos/diocesis.json: CU-HAB -> HAB)
  var PREFIJOS = ['PDR', 'HAB', 'MTZ', 'CFG', 'STC', 'CAV', 'CMG', 'HLG', 'BYM', 'STG', 'GTB'];

  // Los 25 módulos del curso, en orden
  var MODULOS = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11',
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'];
  var BASICO = MODULOS.slice(0, 10);

  // 31 caracteres (sin I, O, Z, 0, 1) -> el módulo 31 es primo y detecta errores de un carácter
  var ALFA = 'ABCDEFGHJKLMNPQRSTUVWXY23456789';

  function control(base) {
    var s = 0;
    for (var i = 0; i < base.length; i++) s = (s + (i + 1) * base.charCodeAt(i)) % 31;
    return ALFA.charAt(s);
  }

  function hoy() {
    var d = new Date();
    var m = ('0' + (d.getMonth() + 1)).slice(-2), dd = ('0' + d.getDate()).slice(-2);
    return d.getFullYear() + '-' + m + '-' + dd;
  }

  // Devuelve {ok:true, codigo:'HAB-0007-K'} o {ok:false, error:'texto para la persona'}
  function normalizarCodigo(txt) {
    var t = String(txt == null ? '' : txt).toUpperCase().replace(/[^A-Z0-9]/g, '');
    var AYUDA = ' Escribe el código que te dio tu coordinador, por ejemplo HAB-0007-K. No escribas tu nombre.';
    if (t.length !== 8) return { ok: false, error: 'El código debe tener 3 letras, 4 números y 1 letra de control.' + AYUDA };
    var pref = t.slice(0, 3);
    var num = t.slice(3, 7).replace(/O/g, '0').replace(/[IL]/g, '1');
    var chk = t.charAt(7);
    if (!/^[A-Z]{3}$/.test(pref) || !/^[0-9]{4}$/.test(num)) return { ok: false, error: 'El formato del código no es válido.' + AYUDA };
    if (PREFIJOS.indexOf(pref) < 0) return { ok: false, error: 'Las tres primeras letras no corresponden a ninguna Cáritas Local.' + AYUDA };
    if (control(pref + num) !== chk) return { ok: false, error: 'La letra final no coincide: revisa el código con tu coordinador.' };
    return { ok: true, codigo: pref + '-' + num + '-' + chk };
  }

  function generarCodigo(prefijo, n) {
    if (PREFIJOS.indexOf(prefijo) < 0) throw new Error('Prefijo no válido: ' + prefijo);
    if (!(n >= 1 && n <= 9999) || Math.floor(n) !== n) throw new Error('Número fuera de rango');
    var num = ('000' + n).slice(-4);
    return prefijo + '-' + num + '-' + control(prefijo + num);
  }

  // Suma de comprobación de 4 caracteres: detecta errores al copiar, NO impide falsificar.
  function hash4(s) {
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return ('0000' + (h & 0xffff).toString(16)).slice(-4);
  }

  // estados: { B1: 3, B2: 2 }  (1 empezado, 2 cerrado, 3 cumplido)
  function armarLinea(codigo, fecha, estados) {
    var partes = [];
    MODULOS.forEach(function (id) {
      var v = estados && estados[id];
      if (v >= 1 && v <= 3) partes.push(id + ':' + v);
    });
    var cuerpo = 'GRD1|' + codigo + '|' + fecha + '|' + (partes.length ? partes.join(',') : '-');
    return cuerpo + '|' + hash4(cuerpo);
  }

  // Devuelve {ok:true, codigo, fecha, estados} o {ok:false, error}
  function leerLinea(linea) {
    var t = String(linea == null ? '' : linea).trim();
    var p = t.split('|');
    if (p.length !== 5 || p[0] !== 'GRD1') return { ok: false, error: 'No parece una línea de avance (debe empezar con GRD1).' };
    var cuerpo = p.slice(0, 4).join('|');
    if (hash4(cuerpo) !== p[4].toLowerCase()) return { ok: false, error: 'El control final no coincide: la línea se copió mal o fue modificada.' };
    var c = normalizarCodigo(p[1]);
    if (!c.ok || c.codigo !== p[1]) return { ok: false, error: 'El código de la línea no es válido.' };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p[2]) || isNaN(Date.parse(p[2]))) return { ok: false, error: 'La fecha no es válida.' };
    var estados = {};
    if (p[3] !== '-') {
      var items = p[3].split(',');
      for (var i = 0; i < items.length; i++) {
        var kv = items[i].split(':');
        if (kv.length !== 2 || MODULOS.indexOf(kv[0]) < 0 || !/^[123]$/.test(kv[1])) return { ok: false, error: 'Módulos con formato no válido.' };
        estados[kv[0]] = parseInt(kv[1], 10);
      }
    }
    return { ok: true, codigo: c.codigo, fecha: p[2], estados: estados };
  }

  // Busca líneas GRD1 dentro de un texto pegado (aunque venga con la fecha/hora de WhatsApp antes)
  function extraerLineas(texto) {
    var salida = [];
    String(texto == null ? '' : texto).split(/\r?\n/).forEach(function (renglon, i) {
      var r = renglon.trim();
      if (!r) return;
      var m = r.match(/GRD1\|[^\s|]+\|[^\s|]+\|[^\s|]+\|[0-9a-fA-F]{4}/);
      salida.push({ renglon: i + 1, linea: m ? m[0] : null, original: r });
    });
    return salida;
  }

  global.CodigoGRD = {
    PREFIJOS: PREFIJOS, MODULOS: MODULOS, BASICO: BASICO,
    control: control, hoy: hoy, hash4: hash4,
    normalizarCodigo: normalizarCodigo, generarCodigo: generarCodigo,
    armarLinea: armarLinea, leerLinea: leerLinea, extraerLineas: extraerLineas
  };
})(typeof window !== 'undefined' ? window : globalThis);
