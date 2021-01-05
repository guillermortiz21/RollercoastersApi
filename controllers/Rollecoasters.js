module.exports = class Rollercoasters{
  constructor(){}

  getAll(req, res){
    res.status(200).json({
      rows: [{name:"Millennium Forcde", park:"Cedar Point"},
             {name:"Twisted Cyclone", park:"Six flags over georgia"}],
      success: true
    });
  }
}