module.exports = (cookies, name) => {
    let aCookie = cookies.split('; ');
    for (let i = 0; i < aCookie.length; i++) {
        let aCrumb = aCookie[i].split('=');
        if (name == aCrumb[0])
            return decodeURI(aCrumb[1]);
    }
    return null;
}