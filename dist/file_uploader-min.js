/*!@preserve
 *
 * FileUploader 1
 * HTML5 / JS Async Uploader
 * Massimo Cassandro 2017-2019
 *
 */
"use strict";var FileUploader=function(){var e;return{}}();function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,a=!1,n=void 0;try{for(var l=e[Symbol.iterator](),o;!(i=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}FileUploader=function(e){var t=function e(){if(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>-1||navigator.userAgent.indexOf("Trident/")>-1)return!1;var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window&&"fetch"in window};return e.init=function(r){var i=e.setOptions(r);if(!t())return i.silent_degradation||alert(i.alert_messages.unsuitable_browser),void(i.unsuitable_browser_callback&&e.exec_callback(i.unsuitable_browser_callback));i.css&&document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="'+i.css+'" type="text/css" media="all">'),document.querySelectorAll("[data-"+i.fupl_selector+"]").forEach((function(t){var r=t.dataset,a=i.fupl_selector.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()})),n=t.dataset[a],l={};""===r&&(r={}),n=""===n?{}:JSON.parse(n),delete(l=e.setOptions(i,n,r))[a],l.element=t;try{if(!l.uploader_url)throw new Error("Parametro `uploader_url` non impostato");if(l.filetype=l.filetype.toLowerCase(),-1!==["svg+img","img-svg","svg-img"].indexOf(l.filetype)&&(l.filetype="img+svg"),-1===Object.keys(e.mimetypes).indexOf(l.filetype))throw new Error("Parametro `filetype` non corretto")}catch(e){console.error(e)}var o=["input_text","templates","info_text_wrap_string","values","extra_fields"];for(var s in o.forEach((function(e){try{"string"==typeof l[e]&&(l[e]=JSON.parse(l[e]))}catch(t){console.error("L'elemento “".concat(e,"” non è un json valido")),console.log(l.element),console.error(t)}})),l)"string"==typeof l[s]&&-1!==["true","false","null"].indexOf(l[s].toLowerCase())&&(l[s]=JSON.parse(l[s]));if(l.img_aspect_ratio&&l.img_w&&l.img_h&&(console.error("FileUploader: the aspect ratio parameter will be ignored, because exact constraints have been set for width and height"),l.img_aspect_ratio=null),l.parsed_img_aspect_ratio=null,l.img_aspect_ratio)try{if(isNaN(l.img_aspect_ratio)){var _,p;if(-1!==l.img_aspect_ratio.indexOf("/")){var u,m=_slicedToArray(l.img_aspect_ratio.split("/"),2);_=m[0],p=m[1]}else if(-1!==l.img_aspect_ratio.indexOf(":")){var c,d=_slicedToArray(l.img_aspect_ratio.split(":"),2);_=d[0],p=d[1]}l.parsed_img_aspect_ratio=_&&p?+_/+p:Number(l.img_aspect_ratio)}else l.parsed_img_aspect_ratio=+l.img_aspect_ratio;if(l.parsed_img_aspect_ratio&&(l.parsed_img_aspect_ratio=Math.round(1e3*(l.parsed_img_aspect_ratio+Number.EPSILON))/1e3),isNaN(l.parsed_img_aspect_ratio)||!l.parsed_img_aspect_ratio)throw new Error}catch(e){console.error("FileUploader: incorrect aspect ratio parameter → ".concat(l.img_aspect_ratio)),l.img_aspect_ratio=null,l.parsed_img_aspect_ratio=null}new e.createUploader(l)}))},e}((FileUploader=function(e){return e.createUploader=function(t){var r=t.element.querySelector('input[type="file"]'),i=t.element.querySelector("label");if("auto"===t.filetype){var a=[],n=[];null!==t.accept&&(n=t.accept.split(",").map((function(e){return e.trim()}))),r&&r.getAttribute("accept")&&(a=r.getAttribute("accept").split(",").map((function(e){return e.trim()}))),t.accept=_toConsumableArray(new Set([].concat(_toConsumableArray(n),_toConsumableArray(a))))}else t.accept=e.mimetypes[t.filetype];var l=e.parse_max_filesize(t.max_filesize,t.locales),o,s;if(!1===l)throw new Error('"'+t.max_filesize+'" non è un valore corretto per `max_filesize`');(t.max_filesize=l,t.multiple=Boolean(t.multiple||r&&r.hasAttribute("multiple")),t.required=Boolean(t.required||r&&r.hasAttribute("required")),t.disabled=Boolean(t.disabled||r&&r.hasAttribute("disabled")),t._type=-1!==["img","svg","img+svg"].indexOf(t.filetype)?"img":"doc",t._mode=t.multiple?"multiple":"single",!t.uploader_legend_text&&i&&(t.uploader_legend_text=i.innerHTML),t.uploader_legend_text||(t.uploader_legend_text="__legend non presente__"),t.element.classList.add("fupl"),t.wrapper=document.createElement("fieldset"),t.element.parentNode.insertBefore(t.wrapper,t.element),t.wrapper.appendChild(t.element),t.wrapper.classList.add("fupl-wrapper"),t.wrapper.classList.add("fupl-type-"+t._type),t.multiple&&t.wrapper.classList.add("fupl-multiple"),t.wrapper_extra_class)&&(o=t.wrapper.classList).add.apply(o,_toConsumableArray(t.wrapper_extra_class.split(" ")));if(t.uploader_legend){var _=["fupl-legend"];t.uploader_legend_class&&_.push(t.uploader_legend_class),t.required&&_.push("required"),t.element.insertAdjacentHTML("beforebegin","<legend"+(_.length?' class="'+_.join(" ")+'"':"")+">"+t.uploader_legend_text+"</legend>"),t.wrapper.classList.add("fupl-has-legend")}(t.element.innerHTML=t.templates.main,t.istance_input=t.element.querySelector('.fupl-panel input[type="file"]'),t.istance_label=t.element.querySelector(".fupl-panel label"),t.istance_dd_text=t.element.querySelector(".fupl-panel .fupl-dd-text"),t.istance_info_text=t.element.querySelector(".fupl-panel .fupl-info-text"),t.istance_result_wrapper=t.element.querySelector(".fupl-result"),t.multiple&&t.istance_input.setAttribute("multiple",""),null!==t.accept&&t.istance_input.setAttribute("accept",t.accept.join(",")),t.required&&(t.wrapper.dataset[e.data_attributes.required]="true"),t.disabled&&(t.wrapper.setAttribute("disabled",!0),t.wrapper.setAttribute("aria-disabled",!0)),t.istance_label.insertAdjacentHTML("beforeend",t.input_text[t._type][t._mode][0]),t.input_label_class)&&(s=t.istance_label.classList).add.apply(s,_toConsumableArray(t.input_label_class.split(" ")));t.istance_dd_text.innerHTML=t.input_text[t._type][t._mode][1],t.show_info_text&&(t.custom_info_text?t.istance_info_text.innerHTML=t.custom_info_text:t.istance_info_text.innerHTML=e.create_info_text(t),t.help_text&&t.istance_info_text.insertAdjacentHTML("beforeend",'<div class="fupl-help-text">'.concat(t.help_text,"</div>"))),t.sortable&&(t.multiple&&t.sortable_varname?e.activateSortable(t):(console.error('"sortable" option incorrectly set'),t.sortable=!1)),t.values&&("object"===_typeof(t.values)?Array.isArray(t.values)||(t.values=[t.values]):console.error("Il parametro `values` non è corretto")),t.values&&t.values.length&&t.values.forEach((function(r){e.createItem(r,t,!0)})),e.set_has_values(t),e.setListeners(t),null!==t.init_callback&&e.exec_callback(t.init_callback,t),t.fancybox&&null!==t.fancybox_callback_func&&e.exec_callback(t.fancybox_callback_func,t),t.debug&&(console.groupCollapsed("FileUploader options"),console.log(t),console.groupEnd())},e}((FileUploader=function(e){return e.createItem=function(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var a=r.templates[r._type][r._mode];null===a&&"multiple"===r._mode&&(a=r.templates[r._type].single);var n=document.createElement("div");n.innerHTML=a;var l=n.querySelector(".fupl-remove");l&&(l.innerHTML=r.templates.remove_btn);var o=n.querySelector(".fupl-file-name");o&&t.name&&(o.innerHTML=t.name,o.title=t.name);var s=n.querySelector(".fupl-file-size");if(s){var _="";"img"===r._type&&t.wi&&t.he&&(_=t.wi+"&times;"+t.he+'<span class="fupl-unit">px</span>',t.size&&(_+=" &ndash; ")),t.size&&(_+=e.parse_filesize(t.size,r.locales)),s.innerHTML=_}"img"===r._type&&(n.querySelector(".fupl-img").src=t.src);var p=n.querySelector(".fupl-url");p&&t.url&&(p.href=t.url);var u=n.querySelector(".fupl-item");t.loading&&(u.classList.add("fupl-is-uploading"),u.insertAdjacentHTML("beforeend",r.templates.loading_element)),"single"===r._mode?r.istance_result_wrapper.innerHTML=n.innerHTML:(r.istance_result_wrapper.querySelector(".fupl-item")||(r.istance_result_wrapper.innerHTML=""),r.istance_result_wrapper.insertAdjacentHTML("beforeend",n.innerHTML));var m=r.istance_result_wrapper.querySelector(".fupl-item:last-child");m.dataset[e.data_attributes.item_id]=t.id;var c=m.querySelector(".fupl-remove-trigger");if(c&&c.addEventListener("click",(function(){m.remove();var a=t.rel_id?t.rel_id:t.id;a&&i&&r.wrapper.insertAdjacentHTML("beforeend",'<input type="hidden" name="'.concat(r.delete_varname,'" value="').concat(a,'">')),e.set_has_values(r)})),r.fancybox&&"img"===r._type&&t.url&&r.fancybox_anchor_markup){if(!m.querySelector("a.fupl-url")){var d=m.querySelector(".fupl-img"),g=document.createElement("div");g.innerHTML=r.fancybox_anchor_markup,g=g.firstChild,d.parentNode.insertBefore(g,d),g.appendChild(d)}m.querySelector("a.fupl-url").setAttribute("href",t.url)}var f=m.querySelector(".fupl-extra-fields");if(null!==r.extra_fields&&f&&(r.extra_fields.forEach((function(e){f.insertAdjacentHTML("beforeend",e.markup.replace(/{{idx}}/g,t.id).replace(/{{val}}/g,i&&t[e.value_key]?t[e.value_key]:"").replace(/{{checked}}/g,i&&+t[e.value_key]?"checked":"").replace(/{{name}}/g,(i&&r.registered_extra_field_varname?r.registered_extra_field_varname:r.varname)+"["+(e.use_rel_id&&t.rel_id?t.rel_id:t.id)+"]["+e.value_key+"]"))})),r.sortable&&f.querySelectorAll("select, input, textarea").forEach((function(e){e.setAttribute("draggable","false"),["dragstart","drag","mousedown"].forEach((function(t){e.addEventListener(t,(function(e){"mousedown"!==t&&e.preventDefault(),e.stopPropagation()}))}))}))),r.sortable){m.setAttribute("draggable",!0);var v=r.istance_result_wrapper.querySelectorAll(".fupl-item").length-1;m.insertAdjacentHTML("beforeend",'<input type="hidden" class="fupl-sortable-order" name="'+(i&&r.registered_extra_field_varname?r.registered_extra_field_varname:r.varname)+"[".concat(t.id,"][").concat(r.sortable_varname,']" value="').concat(v,'">')),r.sortable_icon&&(m.querySelector(".fupl-sortable-icon").innerHTML=r.sortable_icon),e.addSortableEvents(m,r)}return r.istance_result_wrapper.querySelector(".fupl-item:last-child")}catch(e){console.error(e)}},e}((FileUploader=function(e){return e.setListeners=function(t){["dragenter","dragover","dragleave","drop"].forEach((function(e){t.element.addEventListener(e,(function(e){e.preventDefault(),e.stopPropagation()}),!1)})),["dragover","dragenter"].forEach((function(e){t.element.addEventListener(e,(function(){t.element.classList.add(t.element_dragover_class)}),!1)})),["dragleave","dragend"].forEach((function(e){t.element.addEventListener(e,(function(){t.element.classList.remove(t.element_dragover_class)}),!1)})),t.element.addEventListener("drop",(function(r){if(t.element.classList.remove(t.element_dragover_class),!t.wrapper.hasAttribute("disabled")){var i=r.dataTransfer.files;i.length&&(!t.multiple&&i.length>1?t.alert_api(t.alert_messages.too_much_files,t):e.sendFiles(i,t))}}),!1),t.istance_input.addEventListener("change",(function(){e.sendFiles(t.istance_input.files,t)}))},e}((FileUploader=function(e){return e.sendFiles=function(t,r){var i=function e(t){var i=r.element.closest("form"),a;r.disable_submit&&i&&i.querySelectorAll('[type="submit"]').forEach((function(e){e.disabled=t}))},a=function t(a,n){i(!0);var l=e.createItem({id:a.id,name:a.file.name,url:null,src:n,wi:a.width,he:a.height,size:a.file.size,img_type:a.file.img_type,loading:!0},r),o=l.querySelector(".fupl-progress"),s=l.querySelector(".fupl-loading"),_=r.alert_messages.xhr_error.replace(/{{file_name}}/,a.file.name),p=function e(){l.querySelector(".fupl-remove-trigger").click()};r.upload_start_callback&&e.exec_callback(r.upload_start_callback,{item:a,img_preview:n,uploader_options:r}),new Promise((function(t,i){var n=new XMLHttpRequest;n.open("POST",r.uploader_url,!0),n.onload=function(){if(n.status>=200&&n.status<400){var l=JSON.parse(n.responseText);l.error?(r.alert_api(_,r),console.error(l.error),i()):(a.tmp_file=l.tmp_file,t()),r.upload_complete_callback&&e.exec_callback(r.upload_complete_callback,{item:a,server_error:l.error,fupl_options:r})}else r.alert_api(_,r),console.error(n.status,n.statusText),console.error(n.responseText);i()},n.onerror=function(){r.alert_api(_,r),r.debug&&(console.error(n.status,n.statusText),console.error(n.responseText)),i()},n.upload.addEventListener("progress",(function(t){if(r.alternative_loading_func)e.exec_callback.apply(e,[r.alternative_loading_func].concat([t,r]));else{var i=Math.round(t.loaded/t.total*100)||0;o&&(t.lengthComputable?(i=i===1/0?100:i,l.querySelector(".fupl-progress").value=i):(s.innerHTML=r.templates.alternative_loading_element,o=null))}}),!1);var p=new FormData;p.append("file",a.file),n.send(p)})).then((function(){l.classList.remove("fupl-is-uploading"),l.querySelector(".fupl-loading").remove(),l.insertAdjacentHTML("beforeend",e.buildHiddenFields(a,r)),e.set_has_values(r),i(!1)}),(function(){p(),e.set_has_values(r)}))};t.length&&_toConsumableArray(t).forEach((function(t,i){try{var n={id:"fupl_item_"+Date.now()+"_"+i,file:t,width:null,height:null,tmp_file:null,img_type:"img"===r._type?"image/svg+xml"===t.type?"svg":"bmp":null};if(r.accept.length){var l=t.name.split(".").pop().toLowerCase();if(-1===r.accept.indexOf(t.type)&&-1===r.accept.indexOf("."+l))throw r.alert_messages.file_format_error.replace(/{{file_name}}/,t.name)}if(null!==r.max_filesize&&t.size>r.max_filesize.maxbytes){var o=e.parse_filesize(t.size,r.locales);throw r.alert_messages.file_size_error.replace(/{{file_name}}/,t.name).replace(/{{file_size}}/,o).replace(/{{allowed_size}}/,r.max_filesize.feedback_size)}if("bmp"===n.img_type){var s=new FileReader;s.addEventListener("load",(function(){var e=new Image;e.src=s.result,e.addEventListener("load",(function(){var i=[],l;(n.width=e.width,n.height=e.height,r.img_w&&e.width!==r.img_w?i.push(r.alert_messages.img_exact_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,r.img_w)):r.img_min_w&&e.width<r.img_min_w?i.push(r.alert_messages.img_min_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,r.img_min_w)):r.img_max_w&&e.width>r.img_max_w&&i.push(r.alert_messages.img_max_width_err.replace(/{{image_dimension}}/,e.width).replace(/{{allowed_dimension}}/,r.img_max_w)),r.img_h&&e.height!==r.img_h?i.push(r.alert_messages.img_exact_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,r.img_h)):r.img_min_h&&e.height<r.img_min_h?i.push(r.alert_messages.img_min_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,r.img_min_h)):r.img_max_h&&e.height>r.img_max_h&&i.push(r.alert_messages.img_max_height_err.replace(/{{image_dimension}}/,e.height).replace(/{{allowed_dimension}}/,r.img_max_h)),r.parsed_img_aspect_ratio)&&(Math.round(1e3*(e.width/e.height+Number.EPSILON))/1e3!==r.parsed_img_aspect_ratio&&i.push(r.alert_messages.img_ratio_err.replace(/{{aspect_ratio}}/,r.img_aspect_ratio)));i.length?r.alert_api(r.alert_messages.img_err_start_string.replace(/{{file_name}}/,t.name)+"<br>\n<ul><li>"+i.join("</li>\n<li>")+"</li></ul>",r):a(n,s.result)}),!1)}),!1),s.readAsDataURL(t)}else if("svg"===n.img_type){var _=new FileReader;_.addEventListener("load",(function(e){a(n,"data:image/svg+xml;base64,"+window.btoa(e.target.result))})),_.readAsText(t)}else a(n)}catch(e){r.alert_api(e,r,"error")}}))},e}((FileUploader=function(e){var t=function e(t){for(var r="",i={"à":"a","è":"e","é":"e","ì":"i","ò":"o","ù":"u","À":"A","È":"E","É":"E","Ì":"I","Ò":"O","Ù":"U","'":"_","|":"_","!":"_",'"':"_",$:"_","%":"_","&":"_","/":"_","(":"_",")":"_","=":"_","?":"_","^":"_","*":"_","[":"_","]":"_","ç":"c","@":"_","#":"_","<":"_",">":"_","ü":"u","Ü":"U","ñ":"n","Ñ":"N","~":"_",":":"_","\\":"_"},a=0;a<t.length;a++)t[a]in i?r+=i[t[a]]:768===t.charCodeAt(a)||769===t.charCodeAt(a)?r+="":t.charCodeAt(a)>127?r+="_":r+=t.charAt(a);return r.replace(/ /g,"_").replace(/_+/g,"_")};return e.buildHiddenFields=function(e,r){var i="",a={tmp_file:e.tmp_file,file_name:t(e.file.name),size:e.file.size,type:e.file.type};for(var n in"img"===r._type&&(a.width=e.width,a.height=e.height),a)i+='<input type="hidden" name="'+r.varname+"["+e.id+"]["+n+']" value="'+(null!==a[n]&&void 0!==a[n]?a[n]:"")+'">';return'<div class="fupl-hiddens">'+i+"</div>"},e}((FileUploader=function(e){var t="fupl-sortable",r="fupl-sorting",i="fupl-item-sorting",a="fupl-item-dragover",n=null,l=!1,o=function e(){n&&(n.classList.remove(i),n.parentNode.querySelectorAll("."+a).forEach((function(e){e.classList.remove(a)})),n.closest(".fupl").classList.remove(r)),n=null};return e.addSortableEvents=function(e,t){e.addEventListener("dragstart",(function(e){l=t.wrapper.disabled,o(),l||(n=this,t.element.classList.add(r),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text","fupl-sorting"),this.classList.add(i))}),!1),e.addEventListener("dragenter",(function(e){"fupl-sorting"!==e.dataTransfer.getData("text")||l||(e.stopPropagation&&e.stopPropagation(),this!==n&&this.classList.add(a))}),!1),e.addEventListener("dragover",(function(e){return"fupl-sorting"!==e.dataTransfer.getData("text")||l||(e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",this!==n&&this.classList.add(a)),!1}),!1),e.addEventListener("dragleave",(function(){this.classList.remove(a)}),!1),e.addEventListener("drop",(function(e){return"fupl-sorting"!==e.dataTransfer.getData("text")||l||(e.stopPropagation&&e.stopPropagation(),e.preventDefault(),n&&(this.previousElementSibling===n&&this.nextElementSibling?this.parentNode.insertBefore(n,this.nextElementSibling):this.nextElementSibling?this.parentNode.insertBefore(n,this):this.parentNode.insertAdjacentElement("beforeend",n)),o()),!1}),!1),e.addEventListener("dragend",(function(e){"fupl-sorting"!==e.dataTransfer.getData("text")||l||(t.element.classList.remove(r),o(),t.istance_result_wrapper.querySelectorAll(".fupl-sortable-order").forEach((function(e,t){e.value=t})))}),!1)},e.activateSortable=function(e){e.istance_result_wrapper.classList.add(t)},e}((FileUploader=function(e){return e.create_info_text=function(e){var t=[];switch(e.filetype){case"img":t.push(e.info_text.std_imgs);break;case"img+svg":t.push(e.info_text.imgs_svg);break;case"svg":t.push(e.info_text.svg);break;case"pdf":t.push(e.info_text.pdf_file)}if(null!==e.max_filesize&&t.push(e.info_text.max_filesize),"img"===e.filetype||"img+svg"===e.filetype){var r=[];e.img_w&&e.img_h?r.push(e.info_text.img_fixed_size):e.img_min_w&&e.img_min_h&&e.img_min_w===e.img_min_h?r.push(e.info_text.img_equal_min_size):e.img_max_w&&e.img_max_h&&e.img_max_w===e.img_max_h?r.push(e.info_text.img_equal_max_size):(e.img_w?r.push(e.info_text.img_fixed_width):e.img_min_w&&e.img_max_w?r.push(e.info_text.img_width_range):e.img_min_w?r.push(e.info_text.img_min_width):e.img_max_w&&r.push(e.info_text.img_max_width),e.img_h?r.push(e.info_text.img_fixed_height):e.img_min_h&&e.img_max_h?r.push(e.info_text.img_height_range):e.img_min_h?r.push(e.info_text.img_min_height):e.img_max_h&&r.push(e.info_text.img_max_height),e.img_aspect_ratio&&r.push(e.info_text.img_aspect_ratio)),r.length&&t.push(("img+svg"===e.filetype?e.info_text.imgs_svg_size_info_text:"")+r.join(", "))}var i=(t=t.map((function(t){return t.replace(/{{img_w}}/,e.img_w).replace(/{{img_h}}/,e.img_h).replace(/{{img_min_w}}/,e.img_min_w).replace(/{{img_min_h}}/,e.img_min_h).replace(/{{img_max_w}}/,e.img_max_w).replace(/{{img_max_h}}/,e.img_max_h).replace(/{{img_aspect_ratio}}/,e.img_aspect_ratio).replace(/{{max_filesize}}/,e.max_filesize?e.max_filesize.feedback_size:null)}))).join(e.info_text_join_string);return i=i.charAt(0).toUpperCase()+i.slice(1),e.info_text_wrap_string&&i&&(i=e.info_text_wrap_string[0]+i+e.info_text_wrap_string[1]),"svg"!==e.filetype&&"img+svg"!==e.filetype||(i+=e.info_text.svg_optimize_info),i},e}((FileUploader=function(e){var t={fupl_selector:"file-uploader",silent_degradation:!1,unsuitable_browser_callback:null,css:null,debug:!1,locales:"it-IT",disabled:!1,alert_api:function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error";window.alert(t.replace(/(<([^>]+)>)/gi,""))},alert_messages:{unsuitable_browser:"Il tuo browser non ha tutte le funzionalità richieste da questa applicazione.\nUtilizza la versione più recente di Firefox, Edge, Safari, Opera o Chrome",too_much_files:"Puoi selezionare un solo file!",xhr_error:"Si &egrave; verificato un errore nel caricamento del file “<strong>{{file_name}}</strong>”.",file_format_error:"Il file “<strong>{{file_name}}</strong>” è di un formato non consentito",file_size_error:"Le dimensioni di “<strong>{{file_name}}</strong>” ({{file_size}}) superano il valore massimo consentito ({{allowed_size}})",img_err_start_string:"L'immagine “<strong>{{file_name}}</strong>” non è corretta:",img_exact_width_err:"Larghezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_min_width_err:"Larghezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_max_width_err:"Larghezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_exact_height_err:"Altezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_min_height_err:"Altezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_max_height_err:"Altezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)",img_ratio_err:"La proporzione tra base e altezza dell'immagine non corrisponde a quella richiesta ({{aspect_ratio}})"},uploader_url:null,filetype:"auto",accept:null,multiple:!1,required:!1,disable_submit:!1,templates:{main:'<div class="fupl-result"></div><div class="fupl-panel"><div class="fupl-button"><label><input type="file"></label><div class="fupl-dd-text"></div></div><div class="fupl-info-text"></div></div>',no_file:{img:'<div class="fupl-result-empty text-muted small font-italic">Nessuna immagine presente</div>',doc:'<div class="fupl-result-empty text-muted small font-italic">Nessun file presente</div>'},remove_btn:'<button type="button" class="close fupl-remove-trigger" aria-label="Elimina" title="Elimina questo file"><span aria-hidden="true">&times;</span></button>',loading_element:'<div class="fupl-loading"><progress class="fupl-progress" max=100 value=0></progress></div>',alternative_loading_element:'<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div',img:{single:'<div class="fupl-item"><div class="fupl-remove"></div><img alt="Immagine caricata" class="img-fluid fupl-img"><div class="fupl-file-info"><div class="text-truncate fupl-file-name"></div><div class="fupl-file-size"></div><div class="fupl-extra-fields"></div></div></div>',multiple:'<div class="fupl-item"><div class="fupl-remove"></div><div class="fupl-img-wrapper"><img alt="Immagine caricata" class="img-fluid fupl-img" draggable="false"></div><div class="fupl-file-info"><div class="text-truncate fupl-file-name"></div><div class="fupl-file-size"></div></div><div class="fupl-extra-fields"></div><div class="fupl-sortable-icon"></div></div>'},doc:{single:'<div class="fupl-item"><div class="fupl-doc-wrapper"><div class="fupl-remove"></div><div class="fupl-doc text-truncate"><a class="text-truncate fupl-file-name fupl-url" draggable="false"></a></div></div><div class="small ml-1 text-nowrap fupl-file-size"></div><div class="fupl-extra-fields"></div><div class="fupl-sortable-icon"></div></div>',multiple:null}},info_text:{std_imgs:"immagini in formato <strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong> o <strong>WEBP</strong>",imgs_svg:"immagini in formato <strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong>, <strong>WEBP</strong> o <strong>SVG</strong>",imgs_svg_size_info_text:"<strong>Solo immagini non SVG:</strong> ",svg_optimize_info:'<br>È consigliabile ottimizzare i file SVG prima del caricamento, ad esempio tramite <a href="https://jakearchibald.github.io/svgomg/" target="_blank">SVGO</a>',img_fixed_size:"dimensioni: <strong>{{img_w}}&times;{{img_h}}px</strong>",img_equal_min_size:"larghezza e altezza non inferiori a <strong>{{img_min_w}}px</strong>",img_equal_max_size:"larghezza e altezza non superiori a <strong>{{img_max_w}}px</strong>",img_fixed_width:"larghezza <strong>{{img_w}}px</strong>",img_fixed_height:"altezza <strong>{{img_h}}px</strong>",img_width_range:"larghezza compresa tra <strong>{{img_min_w}}px</strong> e <strong>{{img_max_w}}px</strong>",img_min_width:"larghezza non inferiore a <strong>{{img_min_w}}px</strong>",img_max_width:"larghezza non superiore a <strong>{{img_max_w}}px</strong>",img_height_range:"altezza compresa tra <strong>{{img_min_h}}px</strong> e <strong>{{img_max_h}}px</strong>",img_min_height:"altezza non inferiore a <strong>{{img_min_h}}px</strong>",img_max_height:"altezza non superiore a <strong>{{img_max_h}}px</strong>",pdf_file:"file in formato <strong>PDF</strong>",svg:"immagini in formato <strong>SVG</strong>",max_filesize:"max <strong>{{max_filesize}}</strong>",img_aspect_ratio:"Il rapporto tra base e altezza dell'immagine deve essere esattamente pari a <strong>{{img_aspect_ratio}}</strong>"},wrapper_extra_class:null,element_dragover_class:"fupl-is-dragover",uploader_legend:!0,uploader_legend_text:null,uploader_legend_class:null,input_text:{img:{single:["Seleziona un'immagine","…oppure trascinala qui"],multiple:["Seleziona una o pi&ugrave; immagini","…oppure trascinale qui"]},doc:{single:["Seleziona un documento","…oppure trascinalo qui"],multiple:["Seleziona uno o pi&ugrave; documenti","…oppure trascinali qui"]}},input_label_class:"btn btn-outline-primary btn-sm",show_info_text:!0,info_text_wrap_string:["(",")"],info_text_join_string:" - ",custom_info_text:null,help_text:null,img_w:null,img_h:null,img_min_w:null,img_min_h:null,img_max_w:null,img_max_h:null,img_aspect_ratio:null,max_filesize:null,varname:"file",registered_extra_field_varname:null,init_callback:null,upload_start_callback:null,upload_complete_callback:null,alternative_loading_func:null,values:[],delete_varname:"elimina_file[]",fancybox:!1,fancybox_anchor_markup:'<a class="fupl-url" data-fancybox="fupl-gallery"></a>',fancybox_callback_func:null,sortable:!1,sortable_varname:"fupl_order",sortable_icon:'<div title="Trascina per cambiare l\'ordinamento"></div>',extra_fields:null};return e.setOptions=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];if(Object.assign&&"function"==typeof Object.assign)return Object.assign.apply(Object,[{},t].concat(r));var a=function(){var e={},i=function i(a){e[a]=t[a],r.forEach((function(t){void 0!==t[a]&&(e[a]=t[a])}))};for(var a in t)i(a);return{v:e}}();return"object"===_typeof(a)?a.v:void 0},e}((FileUploader=function(e){return e.mimetypes={auto:null,img:["image/png","image/jpeg","image/pjpeg","image/gif","image/webp",".png",".jpg",".jpeg",".pjpg",".pjpeg",".gif",".webp"],pdf:["application/pdf",".pdf"],svg:["image/svg+xml",".svg",".svgz"]},e.mimetypes["img+svg"]=e.mimetypes.img.concat(e.mimetypes.svg),e.data_attributes={required:"required",hasValues:"hasValues",item_id:"id"},e.set_has_values=function(t){var r=t.istance_result_wrapper.querySelectorAll(".fupl-item").length;t.wrapper.dataset[e.data_attributes.hasValues]=r?"true":"false",r||(t.istance_result_wrapper.innerHTML=t.templates.no_file[t._type])},e.parse_filesize=function(e,t){var r=1048576;return(e=+e)>=r?(e/r).toLocaleString(t,{maximumFractionDigits:1})+'<span class="fupl-unit">MB</span>':e<1024?Number((e/1024).toFixed(2)).toLocaleString(t,{maximumFractionDigits:2})+'<span class="fupl-unit">KB</span>':Math.round(e/1024).toLocaleString(t,{maximumFractionDigits:0})+'<span class="fupl-unit">KB</span>'},e.parse_max_filesize=function(e,t){if(e){var r,i,a;if(isNaN(e)){if(i=e.substr(-2,2).toUpperCase(),a=r=+e.substr(0,e.length-2),isNaN(r)||"KB"!==i&&"MB"!==i)return!1}else i="KB",a=r=+e;return r>=1024&&"KB"===i&&(i="MB",a=Math.round(r/1024*100)/100),"KB"===i?r*=1024:r=1024*r*1024,{maxbytes:r,feedback_size:a.toLocaleString(t,{maximumFractionDigits:"KB"===i?0:1})+'<span class="fupl-unit">'+i+"</span>"}}return null},e.exec_callback=function(e,t){try{if("string"==typeof e){var r=window;e.split(".").forEach((function(e){r=r[e]})),r(t)}else e(t)}catch(t){alert("Si è verificato un errore: la funzione “".concat(e,"” non esiste")),console.error(t)}},e}(FileUploader||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{}))||{});
//# sourceMappingURL=file_uploader-min.js.map