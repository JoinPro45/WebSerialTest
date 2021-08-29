var port = undefined, writer;

if (!("serial" in navigator)) {
    alert("Ваш браузер не поддерживает это приложения!");
}

async function connect() {
    var port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    port = port;
    writer = await port.writable.getWriter();
}

async function on(){
    if(!port) {
        const data = new Uint8Array([49]);
        await writer.write(data);
    }
}

async function off(){
    if(!port) {
        const data = new Uint8Array([48]);
        await writer.write(data);
    }
}