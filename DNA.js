// Mini Project Using DNA sequence with Methods with Test

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


// method to build on DNA
function pAequorFactory(num, dna) {

  return {
    specimenNum: num,
    dna: dna,

    mutate() {  // changes the first match occurance to new DNA
      let x = Math.floor(Math.random() * dna.length);
      let randBase = this.dna[x];
      let newBase = returnRandBase();
      while (randBase === newBase) {
        newBase = returnRandBase();
      }
      this.dna[x] = newBase;
      return this.dna
     },

    compareDNA (testDna) {  //compares two DNA and returns exact match percentage
      var count = 0;
      for (var i =0; i < this.dna.length; i++) {
        if (dna[i] === testDna.dna[i]) {
          count++
        }
      }
      var matchPercent = Math.round(count / this.dna.length * 100)
      console.log(`DNA#1 and DNA#2 have ${matchPercent}% DNA MATCH` )
    },

    willLikelySurvive(dna) {  // if DNA strand is made up of at least 60% C & G return true : false

      var countCG = 0;
      for (var i =0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          countCG++
          }
       }
      var percentageSurvive = Math.round((countCG / this.dna.length) * 100)

      if (percentageSurvive >= 60) {
        return true + ' ...DNA will live with a ' + percentageSurvive +'% '+ 'survival rate.'
      } else {
         return false + ' ...DNA will die with a ' + percentageSurvive +'% '+ 'survival rate.'
      }
    }


  }
};

function createDnaSamples () {   // creates 30 samples of DNA with a 60% or greater survival chance

  const samples=[];

  for(let i=1;i<=30;i++) {
    let obj1 = pAequorFactory(i,mockUpStrand());
    if (obj1.willLikelySurvive()){
      samples.push(obj1.dna);
    } else {
      i--;
    }
  }
  return samples
}


// create 2 instance of DNA for testing
//var dna1 = new pAequorFactory(1, mockUpStrand())
//var dna2 = new pAequorFactory(2, mockUpStrand())

//console.log('Speciment DNA #1 ' + dna1.dna)
//console.log('Speciment DNA #2 ' + dna2.dna)

// comparing survival rate testcase
//dna1.compareDNA(dna2)
//console.log(dna1.willLikelySurvive())


// creates 30 usable DNA samples with 60% or greater survival chance
// var create = createDnaSamples()
// console.log(create)
