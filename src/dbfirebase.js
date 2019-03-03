const fbAdmin = require('firebase-admin');
const serviceAccount = require('./');
const fbApp = fbAdmin.initializeApp({
    credential: fbAdmin.credential.cert(serviceAccount),
    databaseURL: '',
    databaseAuthVariableOverride: {
        uid: "indentificador-regras"
    }
});
const db = fbApp.database();
//? Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"

let create = async (objeto) => {
    const auxref = "refencia";
    const dbref = db.ref(auxref);
    const pushref = await dbref.push(objeto, (error) => {
        if (error) {
            console.log(error);
        }
    });
    const k = pushref.key;
    const subref = db.ref(auxref + "/" + k + "/mykey");
    await subref.set(k, (error) => {
        if (error) {
            console.log(error);
        }
    });
    return k;
}

let read = async () => {
    const auxref = "referencia";
    const dbref = db.ref(auxref);

    try {
        const snap = await dbref.once('value');
        const dados = snap.val();
        return dados;
    } catch (error) {
        return res.send(error);
    }
}