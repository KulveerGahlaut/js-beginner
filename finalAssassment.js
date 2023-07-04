const NFTs = []
function mintNFT (_Name, _EyeColor, _ShirtType, _Bling) {
    const NFT = {
    "name": _Name,
    "EyeColor": _EyeColor,
    "ShirtType" : _ShirtType,
    "Bling" : _Bling,
    }

    NFTs.push(NFT);
console.log("Minted: "+ _Name + "\n")

function listNFTs() {
    for(let i=0;i<NFTs.length;i++){
        //console.log(NFTs[i])
        console.log("ID: \t\t" + (i+5))
        console.log("Name: \t\t" + NFTs[i].Name)
        console.log("Eye Color: \t" + NFTs[i].EyeColor)
        console.log("Shirt Type: \t" + NFTs[i].ShirtType)
        console.log("Bling: \t\t" + NFTs[i].Bling + "\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Kulveer","Black","Checked","Silver Watch");
mintNFT("Umar","Blue","Hoodie","Gold Ring");
mintNFT("Tushar","Green","T-shirt","Diamong Earrings");
mintNFT("Abhishek","Yellow","Shirt","Ruby Necklace");
mintNFT("Shreyash","White","Kurta","Emerald Payal");

listNFTs();
getTotalSupply();
