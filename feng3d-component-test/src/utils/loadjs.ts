var testSources = [//
    // "me/feng3d/events/EventBubblesTest.js",//
    // "me/feng3d/events/EventBubblesTest2.js",//
    // "me/feng3d/events/EventDispatcherTest.js",//
    // "me/feng3d/events/IEventDispatcherTest.js",//
    // "me/feng3d/events/EventPriortyTest.js",//
];

loadjs("libs/feng3d-event.js", onFeng3dInited);

function loadjs(jsPath: string, onLoad = null) {
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var loadedJs = document.createElement("script");
    loadedJs.onload = onLoad;
    loadedJs.src = jsPath + "?version=" + Math.random();
    oHead.appendChild(loadedJs);
}

function onFeng3dInited(ev: Event) {

    loadjs("libs/feng3d-component.js", onFeng3dInited1);
}

function onFeng3dInited1(ev: Event) {
    
    testSources.forEach(element => {

        loadjs("bin/" + element);
        var className = getClassName(element);
        document.write('<input type="submit" value="' + className + '" onclick="(new ' + className + '()).test()">');
    });
}

function getClassName(url: string): string {
    return "me.feng3d." + url.split("/").pop().split(".")[0];
}