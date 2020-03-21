var bimpConfig = {
    // Protocol for Simulation Service
    protocol: "https://",
    // Hostname and port where RESTful Simulation Service is hosted
    host: "api.qbp-simulator.com", // or: window.location.hostname + ":8080"
    // Path to the Simulation endpoint in the service
    url: "/",
    // Credentials for obtaining JWT Token
    jwtAuth: {
        username: "limited",
        password: "limited"
        // token: "jwt auth token if known"
    },
    // Credentials for basic auth, if applicable
    // basicAuth: {
    //     username: "limited",
    //     password: "limited"
    // },
    // Relative path prefix to BPMN and Heatmap viewer files (bpmnViewer.html and heatmapViewer.html) to be opened when requested.
    linkPrefix: "",
    // API key for errorstack.com error reporting
    errorStackApiKey: ""
};

// Allow config to be passed via JSON in query string
var bimpConfigParam = new URLSearchParams(window.location.search).get('bimpConfig');
if (bimpConfigParam) {
    bimpConfig = Object.assign(bimpConfig, JSON.parse(bimpConfigParam));
}

// sample initial set of files to be loaded
var initialFiles = [
    {
        name: 'file1.bpmn',
        contents: '<?xml ... '
    },
    {
        name: 'file2.bpmn',
        contents: '<?xml ... '
    }
];

window.addEventListener('DOMContentLoaded', function () {
        Bimp.init('root-container', bimpConfig /*, initialFiles */);
    },
    true
);

