export let documentReady=(callback)=>{
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    callback();
    } else {
    document.addEventListener("DOMContentLoaded", callback);
}
}