import QRCode from 'qrcode'
const GenerateQrCode =({Text,Callback}:{Text:string,Callback:(QrData:string)=>void})=>{
   


    
  

    QRCode.toDataURL(Text).then((value=>{
  
        Callback(value)

   
  }))
  }

  export default GenerateQrCode