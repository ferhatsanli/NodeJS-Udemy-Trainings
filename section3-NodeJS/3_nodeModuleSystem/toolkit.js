// time formatted logging
const thelog = (theText) => {
    const theTime = new Date();
    console.log(`${theTime.toLocaleTimeString()}:${theTime.getMilliseconds()} >> ${theText}`);
}

exports.log = thelog;