var elasticSearch = require('elasticsearch');

var elasticClient = new elasticSearch.Client({
    localhost : 'localhost:9200',
    log: "info"
});

var indexName = "randomindex";

function deleteIndex(){
    return elasticClient.indices.delete({
        index : indexName
    });
}

exports.deleteIndex = deleteIndex;

function initIndex(){
    return elasticClient.indices.create({
        index: indexName
    });
}

exports.initIndex = initIndex;

function indexExists() {  
    return elasticClient.indices.exists({
        index: indexName
    });
}
exports.indexExists = indexExists;  

indexExists.then(function (exists) {  
    if (exists) { 
      return deleteIndex(); 
    } 
  }).then(initIndex);

  function initMapping() {  
    return elasticClient.indices.putMapping({
        index: indexName,
        type: "document",
        body: {
            properties: {
                title: { type: "string" },
                content: { type: "string" },
                suggest: {
                    type: "completion",
                    analyzer: "simple",
                    search_analyzer: "simple",
                    payloads: true
                }
            }
        }
    });
}
exports.initMapping = initMapping;

function addDocument(document) {  
    return elasticClient.index({
        index: indexName,
        type: "document",
        body: {
            title: document.title,
            content: document.content,
            suggest: {
                input: document.title.split(" "),
                output: document.title,
                payload: document.metadata || {}
            }
        }
    });
}
exports.addDocument = addDocument;

function getSuggestions(input) {  
    return elasticClient.suggest({
        index: indexName,
        type: "document",
        body: {
            docsuggest: {
                text: input,
                completion: {
                    field: "suggest",
                    fuzzy: true
                }
            }
        }
    })
}
exports.getSuggestions = getSuggestions;


