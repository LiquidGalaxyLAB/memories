export default {
  document: (content) => `
    <?xml version="1.0" encoding="UTF-8"?>
    <kml xmlns="http://www.opengis.net/kml/2.2"
          xmlns:gx="http://www.google.com/kml/ext/2.2">
      <Document>${content}</Document>
    </kml>`,
}
