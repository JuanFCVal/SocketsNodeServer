class Bands{
    constructor(){
        this.bands = [];
    }
    addBand(band){
        this.bands.push(band);
    }
    getBands(){
        return this.bands;
    }
    removeBand(id){
        this.bands = this.bands.filter(band => band.id !== id); //Retornar todas las bandas que no tengan el id que se le pasa
        return this.bands;
    }
    voteBand(id){
        console.log("Voting for", id);
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.votes++;
            }
            return band;
        })
        return this.bands;
    }
}
module.exports = Bands;