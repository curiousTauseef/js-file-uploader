FileUploader = ( (upl) => {

  // default params
  const default_options = {

    /*
    name of main data-* selector
    */
    fupl_selector : 'file-uploader',

    /*
    silent degradation
    if true, no errors are trhown with unsuitable browsers, and
    you can degrade to a standard input[type="file"] field
    */
    silent_degradation: false,

    /*
      function called when an unsuitable browser is detected
    */
    unsuitable_browser_callback: null,

    /*
      FileUploader CSS path
    */
    css: null,

    /*
      If true, console shows informations about current FileUploader Configuration
    */
    debug: false,

    /*
      locales string, used to correctly format numbers in FileUploader info text
    */
    locales: 'it-IT',

    /*
    If true, it prevents items from being loaded

    The presence of the disabled attribute in the .fupl-wrapper element disables the element
    input [type = file] generated by FileUploader (HTML 5 std behavior) and prevents drag & drop.

    The disabled parameter can also be set via the element attribute
    input [type = file] of fallback, if present.
    Be carefully about changing disabled state of the input field on the fly:
    to have it affect the FileUploader instance, you must also modify the disabled attribute
    of the fieldset.fupl-wrapper element.
    */
    disabled: false,

    /*
      error messeges interface
      Parameters:
        - mes  → `alert_messages` object key (`alert_messages` contains all string messages, see below)
        - type → one of info, error, warning
        - opts → options of current FileUploader instance
    */
    alert_api: (mes, opts, type = 'error') => {  // eslint-disable-line
      window.alert(mes.replace(/(<([^>]+)>)/ig, '' ));
    },

    /*
      Error messages
      Mustache-like placeholders will be replaced with corresponding values
    */
    alert_messages: {

      unsuitable_browser: 'Il tuo browser non ha tutte le funzionalità richieste ' +
      'da questa applicazione.\n' +
      'Utilizza la versione più recente di Firefox, Edge, Safari, Opera o Chrome',

      too_much_files: 'Puoi selezionare un solo file!', // tentativo di trascinare più file con uploader singolo
      xhr_error: 'Si &egrave; verificato un errore nel caricamento del file “<strong>{{file_name}}</strong>”.', // errore ajax
      file_format_error: 'Il file “<strong>{{file_name}}</strong>” è di un formato non consentito',
      file_size_error: 'Le dimensioni di “<strong>{{file_name}}</strong>” ({{file_size}}) '+
        'superano il valore massimo consentito ({{allowed_size}})',

      // images
      img_err_start_string: 'L\'immagine “<strong>{{file_name}}</strong>” non è corretta:',
      img_exact_width_err: 'Larghezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)',
      img_min_width_err: 'Larghezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)',
      img_max_width_err: 'Larghezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)',
      img_exact_height_err: 'Altezza non corrispondente ({{image_dimension}}px invece di {{allowed_dimension}}px)',
      img_min_height_err: 'Altezza inferiore a quella minima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)',
      img_max_height_err: 'Altezza superiore a quella massima consentita ({{image_dimension}}px invece di {{allowed_dimension}}px)',
      img_ratio_err: 'La proporzione tra base e altezza dell\'immagine non corrisponde a quella richiesta ({{aspect_ratio}})'
    },

    /*
      Server side script url that performs the upload to the server and
      returns a json info string
      Mandatory
    */
    uploader_url: null,


    /*
      Types of selectable files
      the value must match one of the `upl.mimetypes` arrays
    */
    filetype: 'auto',

    /*

      String of extensions or mimetypes separated by commas that identify
      alloewd files to be uploaded,
      in addition or replacement of what is set via the `filetype` parameter.

      The `accept` attribute of the input field contained
      in the FileUploader element (if present), performs the same function.

      In both cases, the values are taken into account only if `filetype == 'auto'`

      In the presence of both the `accept` parameter and the `accept` attribute,
      a merge is performed, and the accept attribute takes precedence over the parameter.
      If this parameter is `null`, the` accept` attribute is not present,
      and  `filetype` parameter is `auto` all file types are accepted.

    */
    accept: null,

    /*
      Enable the ability to uploader multiple files.
      This option can also be activated via the `multiple` attribute
      of the `input` field (if present)
    */
    multiple: false,

    /*
      Set the FileUploder as required
      This option can also be activated via the `multiple` attribute
      of the `input` field (if present)
    */
    required: false,

    /*
      Disable FileUploader parent form element and its submit button while
      FileUploader is performing an upload.
      Take care to avoid any conflicts with other behaviors of the form before actving this option
    */
    disable_submit: false,

    /*
      HTML templates

      - `main`         : main template- It is inserted inside the `fupl_selector` element.
                         The `flup` class is also added to this element, and is wrapped by
                         the `.flup-wrapper` fieldset
      - `single_img`   : single image template
      - `multiple_imgs`: multiple images template
      - `single_doc`   : single document template
      - `multiple_docs`: multiple documents template
      - `no_file`      : template used when no file is present

      Take a look to the readme for more info.
      Default markup uses some Boostrap 4 classes.

      You can modify these templates as you need, but you have to preserve
      the `fupl-*` classes

      Images templates must contain the img tag.

      Multiple documents and images templates can be null: single elements templates
      are used in this case.
    */
    templates: {

      main: '<div class="fupl-result"></div>' +
        '<div class="fupl-panel">' +
          '<div class="fupl-button">' +
            '<label><input type="file"></label>' +
            '<div class="fupl-dd-text"></div>' +
          '</div>' +
          '<div class="fupl-info-text"></div>' +
        '</div>',

      no_file: {
        img: '<div class="fupl-result-empty text-muted small font-italic">Nessuna immagine presente</div>',
        doc: '<div class="fupl-result-empty text-muted small font-italic">Nessun file presente</div>'
      },

      /*
        trigger for removing files
        This markup will be placed inside the `.fupl-remove` element,
        that must be present in the template of each FileUploader item
        It must be a button element
      */
      remove_btn: '<button type="button" class="close fupl-remove-trigger" aria-label="Elimina" title="Elimina questo file">' +
            '<span aria-hidden="true">&times;</span>' +
          '</button>',

      /*
        Markup to show uploading progress
      */
      loading_element: '<div class="fupl-loading"><progress class="fupl-progress" max=100 value=0></progress></div>',

      /*
        Alternative loading feedback, used if progress.lengthComputable == false.
        In this case and if the `alternative_loading_func` function is not present,
        this string replaces the `.fupl-progress` element.
      */
      alternative_loading_element: '<div class="spinner-grow text-primary" role="status">' +
          '<span class="sr-only">Loading...</span></div',

      /*
        items templates
        if tag <a> is used, avoid `href` attribute
      */
      img: {
        single: '<div class="fupl-item">' +
          '<div class="fupl-remove"></div>' +
          '<img alt="Immagine caricata" class="img-fluid fupl-img">' +
          '<div class="fupl-file-info">' +
            '<div class="text-truncate fupl-file-name"></div>' +
            '<div class="fupl-file-size"></div>' +
            '<div class="fupl-extra-fields"></div>' +
          '</div>' +
        '</div>',

        multiple: '<div class="fupl-item">' +
            '<div class="fupl-remove"></div>' +
            '<div class="fupl-img-wrapper">' +
              '<img alt="Immagine caricata" class="img-fluid fupl-img" draggable="false">' +
            '</div>' +
            '<div class="fupl-file-info">' +
              '<div class="text-truncate fupl-file-name"></div>' +
              '<div class="fupl-file-size"></div>' +
            '</div>' +
            '<div class="fupl-extra-fields"></div>' +
            '<div class="fupl-sortable-icon"></div>' +
          '</div>'
      },

      doc : {
        single: '<div class="fupl-item">' +
            '<div class="fupl-doc-wrapper">' +
              '<div class="fupl-remove"></div>' +
              '<div class="fupl-doc text-truncate">' +
                '<a class="text-truncate fupl-file-name fupl-url" draggable="false"></a>' +
              '</div>' +
            '</div>' +
            '<div class="small ml-1 text-nowrap fupl-file-size"></div>' +
            '<div class="fupl-extra-fields"></div>' +
            '<div class="fupl-sortable-icon"></div>' +
          '</div>',

        multiple: null // uses single doc templates
      }
    },

    /*
      info text strings
      Mustache-like placeholders will be replaced with corresponding values
    */
    info_text: {
      std_imgs : 'immagini in formato <strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong> o <strong>WEBP</strong>',
      imgs_svg : 'immagini in formato <strong>JPEG</strong>, <strong>PNG</strong>, <strong>GIF</strong>, <strong>WEBP</strong> o <strong>SVG</strong>',
      imgs_svg_size_info_text: '<strong>Solo immagini non SVG:</strong> ',
      svg_optimize_info: '<br>È consigliabile ottimizzare i file SVG prima del caricamento, ' +
        'ad esempio tramite <a href="https://jakearchibald.github.io/svgomg/" target="_blank">SVGO</a>',
      img_fixed_size: 'dimensioni: <strong>{{img_w}}&times;{{img_h}}px</strong>',
      img_equal_min_size: 'larghezza e altezza non inferiori a <strong>{{img_min_w}}px</strong>',
      img_equal_max_size: 'larghezza e altezza non superiori a <strong>{{img_max_w}}px</strong>',
      img_fixed_width : 'larghezza <strong>{{img_w}}px</strong>',
      img_fixed_height : 'altezza <strong>{{img_h}}px</strong>',
      img_width_range: 'larghezza compresa tra <strong>{{img_min_w}}px</strong> e <strong>{{img_max_w}}px</strong>',
      img_min_width: 'larghezza non inferiore a <strong>{{img_min_w}}px</strong>',
      img_max_width: 'larghezza non superiore a <strong>{{img_max_w}}px</strong>',
      img_height_range: 'altezza compresa tra <strong>{{img_min_h}}px</strong> e <strong>{{img_max_h}}px</strong>',
      img_min_height: 'altezza non inferiore a <strong>{{img_min_h}}px</strong>',
      img_max_height: 'altezza non superiore a <strong>{{img_max_h}}px</strong>',
      pdf_file: 'file in formato <strong>PDF</strong>',
      svg: 'immagini in formato <strong>SVG</strong>',
      max_filesize: 'max <strong>{{max_filesize}}</strong>',
      img_aspect_ratio: 'Il rapporto tra base e altezza dell\'immagine deve essere esattamente pari a <strong>{{img_aspect_ratio}}</strong>'
    },

    /*
      Extra classes to be added to the FileUploader wrapper element
      (classes names separated by spaces)
    */
    wrapper_extra_class: null,

    /*
      Class(es) to be added to the FileUploader element when a file is dragged there from desktop
    */
    element_dragover_class: 'fupl-is-dragover',

    /*
      If true a legend tag will be added inside the the FileUploader wrapper (fieldset)
      It will be filled with the text of the label of the input[file] tag (if present)
      or with the uploader_legend_text parameter content
    */
    uploader_legend: true,

    /*
      Text of legend element (alternative to original label text)
    */
    uploader_legend_text: null,

    /*
      Class to be added to uploader_legend element
    */
    uploader_legend_class: null,

    /*
    texts of the label of the generated input tag and of the drag&drop info text
    (to be inserted in `.fupl-dd-text`)
    */
    input_text: {
      img: {
        single:   ['Seleziona un\'immagine', '\u2026oppure trascinala qui'],
        multiple: ['Seleziona una o pi&ugrave; immagini', '\u2026oppure trascinale qui']
      },
      doc: {
        single: ['Seleziona un documento', '\u2026oppure trascinalo qui'],
        multiple: ['Seleziona uno o pi&ugrave; documenti', '\u2026oppure trascinali qui']
      }
    },

    /*
      classes to be added to the label of the generated nput[file] tag
    */
    input_label_class: 'btn btn-outline-primary btn-sm',


    /*
      whether or not to show the information text on accepted formats, image size, etc.
      If you decide not to show it, you may need to remove the
      `.fupl-info-text` element from the template
    */
    show_info_text: true,

    /*
      strings added to the beginning and end of the generated info text
      used only if `custom_info_text` is not set
    */
    info_text_wrap_string: ['(', ')'],

    /*
      String used to join the various parts of the generated info text
      used only if `custom_info_text` is not set
    */
    info_text_join_string: ' - ',

    /*
      Custom info text
      If present, replaces the generated info text
    */
    custom_info_text: null,

    /*
      help text
      If present, is added after the info_text or custom_info_text
      (if show_info_text === true)
      help_text will be inserted into a `.fupl-help-text` div, located inside
      the `.fupl-info-text` div
      html is allowed
    */
    help_text: null,

    /*
    Images settings (only for filetype == 'img')

    Numeric values that correspond to the pixel dimensions required for the image.
    The img_min_* and img_max_* parameters can be assigned simultaneously,
    but they are ignored if the corresponding exact parameters exist
    (for example, if img_w is present, the parameters img_min_w and img_max_w
    or img_aspect_ratio are not taken into consideration).
    The default value of all parameters is null, which means that they are not applied.
    Aspect ratio must be a number or string in w/h or w:h format or the result of w/h division.
    Aspect ratio values are rounded to three decimal places

      * `img_w`            : exact image width
      * `img_h`            : exact image height
      * `img_min_w`        : min image width
      * `img_min_h`        : min image height
      * `img_max_w`        : max image width
      * `img_max_h`        : max image height
      * `img_aspect_ratio` : aspect ratio w/h value (16/9, 4:3, 0.5, ecc)
    */
    img_w            : null,
    img_h            : null,
    img_min_w        : null,
    img_min_h        : null,
    img_max_w        : null,
    img_max_h        : null,
    img_aspect_ratio : null,


    /*
      Aspect Ratio accuracy.
      It is a number that indicates the decimal numbers to which the image size
      ratio will be rounded for comparison with the `img_aspect_ratio` parameter
    */
    aspect_ratio_accuracy: 2,

    /*
      Maximum size (weight) of the image. It can be a number,
      and in this case it corresponds to a dimension in KB, or a string
      composed of a numeric value and a suffix between ‘KB’ and ‘MB’ (also lowercase).
      If the value is null or if the string is not recognized,
      no limit is applied.
    */
    max_filesize: null,

    /*
      Prefix of the variable used to send the data to the server.
      The value indicates the base name of the generated varname
    */
    varname: 'file',

    /*
      Prefix of the variable used to send the data to the server,
      for extra fields of preregistered files only
      (For compatibility with beta version)
    */
    registered_extra_field_varname: null,

    /*
      Function called after the initialization of each FileUploader element.
      Function is invoked passing the complete `fupl_options` obj as argument
    */
    init_callback: null,

    /*
      Function called each time a file upload begins.
      Function argument is an object that contains:
        * `item`: current item object, it contains:
            - `id`: element unique id
            - `file`: current filelist object
            - `width` and `height`: null or image dimensions (pixel)
        * `img_preview` : base64 image preview (null if not an image)
        * `fupl_options`: options of current FileUploader instance
    */
    upload_start_callback: null,

    /*
      Function called each time a file has been uploaded.
        Function argument is an object that contains:
        * `item`: current item object, it contains:
            - `id`: element unique id
            - `file`: current filelist object
            - `width` and `height`: null or image dimensions (pixel)
            - `tmp_file`: name of temporary file saved on the server
        * `server_error`: error message strimg (null if no error occurred)
        * `fupl_options`: options of current FileUploader instance
    */
    upload_complete_callback: null,

    /*
      Alternative upload progress function (see alternative_loading_element parameter)
      If present, it replaces the standard one
      Function argument is an object that contains:
        - `progress_event`: upload progress event
        - `fupl_options`: options of current FileUploader instance
    */
    alternative_loading_func: null,

    /*
      JSON array of preregistered element:
      [
        {
          rel_id → id of the record related to the file (it's facultative and can be null).
                   It's usefully for many-to-many tables, and, if present,
                   is the one provided to delete a file from the server
          id     → unique id of the file (required)
          name   → file name (required)
          url    → url for <a> tag href attribute (if present) (facultative)
          src    → image `src` attribute (required for images only)
          wi     → image pixel width  (for images only)
          he     → image pixel height  (for images only)
          size   → bytes size
          [...]  → extra fields, if present
        }
        [...]
      ]
    */
    values: [],

    /*
      varname use for deleted file generated hidden fields
    */
    delete_varname: 'elimina_file[]',

    /*
      if true fancybox integration is activated for images
      fancybox is not present in FileUploader, and must be loaded in the page
      Furthermore, to activate this option, an `url` parameter must be provided
      (see `values` option)
    */
    fancybox: false,

    /*
      markup of <a> tag to wrap image tags when fancybox option is active
      if a `a.fupl-url` element is present in img templates string, this options
      will not be used
    */
    fancybox_anchor_markup: '<a class="fupl-url" data-fancybox="fupl-gallery"></a>',

    /*
      optional function to be called after fancybox markup is applied
      to all elements and after `init_callback`.
      Function is invoked passing the complete `fupl_options` obj as argument
    */
    fancybox_callback_func: null,

    // ========================================
    // SORTABLE OPTIONS
    // ========================================
    /*
      Enable the ability to rearrange items by dragging them.

      This options adds one more hidden field for each file to the form, using the
      `reorder_varname` parameter for generated varnames.

      The reorder option is enabled if the reorder parameter is true, if
      the multiple parameter is true and if the sortable_varname parameter is present

      If the option is active, the values of any pre-recorded items
      must be provided in the json `values` in the correct order

      See `demo / reorder_demo.html` for a usage example
    */
    sortable: false,

    /*
      sortable hidden item varname
      it will be combined with main varname to obtain a string like
        varname[item_id][sortable_varname]
    */
    sortable_varname: 'fupl_order',

    /*
      markup for dragging icon
      to be inserted in `.fupl-sortable-icon` element,
      that must be present in the multiple item template
    */
    sortable_icon: '<div title="Trascina per cambiare l\'ordinamento"></div>',

    // ========================================
    // EXTRA FIELDS
    // ========================================
    /*
      Markup to be added at the end of every uploaded item.
      It is an array of objects each of which describes a field element:
        [
          {
            "value_key": field key,
            "markup": html string
          },
          ...
        ]

      * `value_key` identifies the field element and corresponds to the key used
                    also in the values object.
      * `use_rel_id` (default false), if true, and the `values` parameter contains the
                     `rel_id` items, the `{{name}}` variable will be generated
                     using `rel_id` instead of `id`.
                     Only pre-registered items will be affected by this setting (since new items
                     never have a `rel_id`).
                     If `use_rel_id` is true but the `rel_id`  item doesn't exist,
                     the `id`  will be used

      * `markup` is a HTML string which contains some Mustache-like placeholder:
        - `{{idx}}`         → unique id of the element
        - `{{val}}`         → content of value attribute, it corresponds to
                              `values[...][value_key]` value
        - `{{checked}}`     → if `values[...][value_key]` exists and it's different from
                              `0`, `null` or empty string, it is replaced with the `checked` attribute,
                              otherwise, with an empty string
        - `{{name}}`        → is replaced with a PHP name string formed by
                                 * the `varname` parameter
                                 * the unique id or rel_id (according to use_rel_id setting) of the element
                                 * the `value_key` string
                              Example: `file[fupl_00001][caption]`

      Take a look to `extra_fields_demo.html` for a working demo.

    */
    extra_fields: null
  };

  upl.setOptions = (...custom_options) => {

    if( Object.assign && typeof Object.assign === 'function') {
      return Object.assign(
        {},
        default_options,
        ...custom_options
      );

    } else { // IE 11, necessario anche se non c'è il supporto IE
      let opts = {};
      for(let i in default_options) {
        opts[i] = default_options[i];
        custom_options.forEach( item => {
          if(item[i] !== undefined) {
            opts[i] = item[i];
          }
        });
      }
      return opts;
    }
  };

  return upl;

})(FileUploader || {});
