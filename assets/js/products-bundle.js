(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.renderJekyllPagesApiSearchResults = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function getVisibleItemUrls(e){var t={},n=location.origin||location.protocol+"//"+location.host;return e.forEach(function(e,i){t[n+e.url]=!0}),t}function filterMatchingItems(e,t){var n,i,o=[];for(i=0;i!=e.children.length;++i)n=e.children[i],t[n.getElementsByTagName("a")[0].href]!==!0&&o.push(n);o.forEach(function(t){e.removeChild(t)})}function setTabIndices(e){var t,n;for(t=0;t!=e.children.length;++t)n=e.children[t].getElementsByTagName("a")[0],n.tabindex=t,0===t&&n.focus()}module.exports=function(e,t,n,i){filterMatchingItems(i,getVisibleItemUrls(t)),setTabIndices(i)};
},{}]},{},[1])(1)
});