function saysomething(){
    var Name = document.getElementById('nama') 
    var Address = document.getElementById('alamat')
    var birthplace = document.getElementById('tempatlahir')
    var birth = document.getElementById('tgllahir')
    var hobby = document.getElementById('hobi')

    if(Name.value  === "" || Address.value  === "" || birthplace.value === "" || birth.value === "" || hobby.value === ""){
        alert("Mohon maaf! data belum terisi lengkap.")
    } else {
        window.location.href = "payment.html"
        alert("Terima Kasih! sudah mengisi data dengan lengkap.")
    }
}

function opsipembayaran(){
    var pembayaran = document.getElementById("pembayaran").value;
    if (pembayaran == "cancel"){
        document.getElementById("cicilan").disabled = true;
        cicilan.value = ""
    }else if(pembayaran == "cash"){
        document.getElementById("cicilan").disabled = true;
        cicilan.value = ""
    }else if(pembayaran == "credit"){
        document.getElementById("cicilan").disabled = false;
    }
}


function totalprice(){
    if (pembayaran.value == "cash"){
        var phone_price = document.getElementById("phone").value;

        if(phone_price == 16000000){
            document.getElementById("discount").value = 1000000
        }else if(phone_price == 18000000){
            document.getElementById("discount").value = 2000000
        }else if(phone_price == 20000000){
            document.getElementById("discount").value = 3000000
        }else if(phone_price == 22000000){
            document.getElementById("discount").value = 4000000
        }

        var diskon_value = document.getElementById("discount").value
        var totalharga = Number(phone_price) - Number(diskon_value)

        document.getElementById("price").value = totalharga

    } else if(pembayaran.value == "credit"){
        var phone_price = document.getElementById("phone").value;
        var opsi_cicilan = document.getElementById("cicilan").value;

        if(opsi_cicilan == 5){
            document.getElementById("discount").value = 1000000
        }else if(opsi_cicilan == 10){
            document.getElementById("discount").value = 2000000
        }else if(opsi_cicilan == 15){
            document.getElementById("discount").value = 3000000
        }else if(opsi_cicilan == 20){
            document.getElementById("discount").value = 4000000
        }

        var diskon_value = document.getElementById("discount").value
        var totalharga = (Number(phone_price) - Number(diskon_value)) / Number(opsi_cicilan)

        document.getElementById("price").value = totalharga
    }
}

function opsicicilan(){
    var phone_price = document.getElementById("phone").value;
    var opsi_cicilan = document.getElementById("cicilan").value;

    if(opsi_cicilan == 5){
        document.getElementById("discount").value = 1000000
    }else if(opsi_cicilan == 10){
        document.getElementById("discount").value = 2000000
    }else if(opsi_cicilan == 15){
        document.getElementById("discount").value = 3000000
    }else if(opsi_cicilan == 20){
        document.getElementById("discount").value = 4000000
    }

    var diskon_value = document.getElementById("discount").value
    var totalharga = (Number(phone_price) - Number(diskon_value)) / Number(opsi_cicilan)

    document.getElementById("price").value = totalharga
}