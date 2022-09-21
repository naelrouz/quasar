export default {
  isoName: 'my',
  nativeName: 'Malaysia',
  label: {
    clear: 'kosong',
    ok: 'pasti',
    cancel: 'Batal',
    close: 'penutupan',
    set: 'sediakan',
    select: 'pilih',
    reset: 'set semula',
    remove: 'keluarkan',
    update: 'memperbaharui',
    create: 'cipta',
    search: 'cari',
    filter: 'penapis',
    refresh: 'segarkan semula',
    expand: function (label) { return label ? `"${label}" ko hkyaae htwin par` : 'hkyaae htwin par' },
    collapse: function (label) { return label ? `"${label}" ko hkout saimpar` : 'pyaokya sai' }
  },
  date: {
    days: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    daysShort: 'Aha_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogo_Sep_Okt_Nov_Dis'.split('_'),
    headerTitle: function (date) {
      return new Intl.DateTimeFormat('my', {
        weekday: 'short', month: 'short', day: 'numeric'
      }).format(date)
    },
    firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    pluralDay: 'langit'
  },
  table: {
    noData: 'tiada data tersedia',
    noResults: 'Tiada data yang sepadan ditemui',
    loading: 'memuatkan...',
    selectedRecords: function (rows) {
      return 'dipilih' + rows + 'baris'
    },
    recordsPerPage: 'baris setiap muka surat:',
    allRows: 'semua',
    pagination: function (start, end, total) {
      return start + '-' + end + ' / ' + total
    },
    columns: 'Senaraikan'
  },
  editor: {
    url: 'URL',
    bold: 'berani',
    italic: 'condong',
    strikethrough: 'tembus',
    underline: 'gariskan',
    unorderedList: 'senarai tidak teratur',
    orderedList: 'senarai pesanan',
    subscript: 'subskrip',
    superscript: 'superskrip',
    hyperlink: 'Hiperpautan',
    toggleFullscreen: 'togol skrin penuh',
    quote: 'tanda petikan',
    left: 'Jajar ke kiri',
    center: 'penjajaran tengah',
    right: 'Sejajar ke kanan',
    justify: 'wajar',
    print: 'Cetak',
    outdent: 'mengurangkan lekukan',
    indent: 'meningkatkan inden',
    removeFormat: 'gaya yang jelas',
    formatting: 'format',
    fontSize: 'Saiz huruf',
    align: 'selaraskan',
    hr: 'Masukkan garisan mendatar',
    undo: 'membatalkan',
    redo: 'buat semula',
    heading1: 'Tajuk satu',
    heading2: 'Tajuk dua',
    heading3: 'Tajuk tiga',
    heading4: 'Tajuk Empat',
    heading5: 'Tajuk Lima',
    heading6: 'Tajuk Enam',
    paragraph: 'perenggan',
    code: 'kod',
    size1: 'sangat kecil',
    size2: 'lebih kecil',
    size3: 'biasa',
    size4: 'sederhana hingga besar',
    size5: 'besar',
    size6: 'sangat besar',
    size7: 'super besar',
    defaultFont: 'fon lalai',
    viewSource: 'menyemak data'
  },
  tree: {
    noNodes: 'tiada nod tersedia',
    noResults: 'Tiada nod yang sepadan ditemui'
  }
}
