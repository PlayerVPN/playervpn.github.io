self.__uv$config = {
    prefix: '/active/go/',
    bare: null,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/active/uv/uv.handler.js',
    bundle: '/active/uv/uv.bundle.js',
    config: '/active/uv/uv.config.js',
    sw: '/active/uv/uv.sw.js',
};

const bareServers = [
    'https://boredomarcade.xyz/bare/',
    'https://chillcorner.lol/bare/',
    'https://armiimppxp.mangalshova.com.np/bare/'
];

async function testBare(url) {
    try {
        const res = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        return true;
    } catch {
        return false;
    }
}

(async () => {
    for (const bare of bareServers) {
        if (await testBare(bare)) {
            self.__uv$config.bare = bare;
            console.log(`Using bare: ${bare}`);
            break;
        }
    }

    if (!self.__uv$config.bare) {
        console.error("No working bare servers found!");
    }
})();
