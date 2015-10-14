var fs = Meteor.npmRequire('fs');
var Docxtemplater = Meteor.npmRequire('docxtemplater');
Router.route('/appsuket/download/:_id', {where: 'server'}).get(function(){
//Load the docx file as a binary
var params = this.params;
var id = params._id;
var date = new Date();
var __dirname = process.env.PWD
var content = fs.readFileSync(__dirname + "/template/templateSuketKelahiran.docx", "binary");

var doc = new Docxtemplater(content);

var datadb = Kelahiran.findOne(id);
//set the templateVariables
doc.setData({
    "namaAnak":datadb.namaAnak,
    "tglLahir":datadb.tanggalLahir,
    "hariLahir":datadb.hariLahir,
    "jamLahir":datadb.jamLahir,
    "jenisKelamin":datadb.jenisKelamin,
    "tempatLahir":datadb.tempatLahir,
    "namaIbu":datadb.namaIbu,
    "nikIbu":datadb.nikIbu,
    "umurIbu":datadb.umurIbu, 
    "pekerjaanIbu":datadb.pekerjaanIbu,
    "alamatIbu":datadb.alamatIbu,
    "namaAyah":datadb.namaAyah,
    "nikAyah":datadb.nikAyah,
    "umurAyah":datadb.umurAyah,
    "pekerjaanAyah":datadb.pekerjaanAyah,
    "alamatAyah":datadb.alamatAyah,
    "namaPelapor": datadb.namaPelapor,
    "nikPelapor":datadb.nikPelapor,
    "umurPelapor": datadb.umurPelapor,
    "pekerjaanPelapor":datadb.pekerjaanPelapor,
    "alamatPelapor":datadb.alamatPelapor,
    "hubPelapor":datadb.hubPelapor,
    "tanggalCetak":moment(date).format("D MMMM YYYY")
});
    
//apply them (replace all occurences of {first_name} by Hipp, ...)
doc.render();

var buf = doc.getZip().generate({type:"nodebuffer"});

fs.writeFileSync(__dirname + "/docxdocument/" + datadb.namaPelapor + moment(date).format("DMMMMYYYY") + ".docx", buf);

this.response.writeHead(200, {
  'Content-Type': 'application/octet-stream',
  'Content-Disposition': 'attachment; filename=' + datadb.namaPelapor + moment(date).format("DMMMMYYYY") + ".docx"
});

Meteor.call('editTglCetakSuketKelahiran',id, moment(date).format("dddd, D MMMM YYYY, h:mm"), moment(date).format("dddd, D MMMM YYYY, h:mm"), "Selesai");
// Pipe the file contents to the response
fs.createReadStream(__dirname + "/docxdocument/" + datadb.namaPelapor + moment(date).format("DMMMMYYYY") + ".docx").pipe(this.response);
});