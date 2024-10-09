import Web3 from "web3";
import ABI from "./ABI.json"

const contractAddress = "0x46F8f5a732F6Bd27421F70cb05E2Ab5c19c08898"

export async function doLogin():Promise<any>{

    if(!(window as any).ethereum){
        const confirm = window.confirm("Você não Possui a Carteira Metamask Instalada , Deseja Instalar ?")
        if(confirm == true){
            window.open("https://metamask.io/", "_blank");
        }
    }else{
        const web3 =  new Web3((window as any).ethereum);
        const accounts = await web3.eth.requestAccounts();

        if (!accounts || !accounts.length) throw new Error(`MetaMask não foi autorizada!`);
    
        localStorage.setItem("wallet", accounts[0]);
        return accounts[0];
    }


}


function getContract() {
    if (!(window as any).ethereum) throw new Error(`MetaMask não está instalada!`);

    const from : any = localStorage.getItem("wallet");
    const web3 = new Web3((window as any).ethereum);
    return new web3.eth.Contract(ABI, contractAddress, { from });
}

export async function getDispute() {
    const contract  : any = getContract();
    return contract.methods.dispute().call();
}