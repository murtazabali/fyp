                var editor = null;
                var data = '';
               var lang ='';
               var themevar ='vs-dark';
               var langpick = '';
               
               
               function readTextFile(file)
               {
                   var rawFile = new XMLHttpRequest();
                   rawFile.open("GET", file, false);
                   rawFile.onreadystatechange = function ()
                   {
                       if(rawFile.readyState === 4)
                       {
                           if(rawFile.status === 200 || rawFile.status == 0)
                           {
                               var allText = rawFile.responseText;
                               data = allText;
                           }
                       }
                   }
                   rawFile.send(null);
               }

             

              
               readTextFile('/build/index/samples/sample.html.txt');
               $(document).ready(function() {
                   console.log(themevar);
                   
                  

                        require.config({ paths: { 'vs': '/build/package/dev/vs'}});

                   
               


                                require(['vs/editor/editor.main'], function() {
                                    editor = monaco.editor.create(document.getElementById('container'), {
                                    theme : themevar
                           });

                        var MODES = (function() {
                            var modesIds = monaco.languages.getLanguages().map(function(lang) {
                                return lang.id;
                            });
                            modesIds.sort();

                            return modesIds.map(function(modeId) {
                                return {
                                    modeId: modeId,
                                    sampleURL: '/build/index/samples/sample.' + modeId + '.txt'
                                };
                            });
                        })();

                        for (var i = 0; i < MODES.length; i++) {
                            var o = document.createElement('option');
                            o.textContent = MODES[i].modeId;
                            $(".language-picker").append(o);
                        }
                        loadSample(MODES[0]);
                        
                        $(".language-picker").change(function() {
                             langpick = MODES[this.selectedIndex]; 
                            loadSample(langpick);
                        });

                       
                       
                      
                
                    
                    });
                  
                  
                });

                function loadSample(mode) {
                    $.ajax({
                        type: 'GET',
                        url: mode.sampleURL,
                        dataType: 'text'                      
                    }).done(function(data) {
                    
                        if (!editor) {
                            $('.container').empty();
                            editor = monaco.editor.create(document.getElementById('container'), {
                              
                            });
                        }
                     
                        var oldModel = editor.getModel();
                        var newModel = monaco.editor.createModel(data, mode.modeId);
                        lang = mode.modeId;
                        editor.setModel(newModel);
                        
                        if (oldModel) {
                            oldModel.dispose();
                        }
                       
                    });

                   
                }
                function compile() {
                    // get the value of the data
                    var value = lang;
                    if(value == 'java'){
                        term.send('javac build/index/samples/sample.'+value+'.txt \r');
                    }
                   
                    
                    
                 }

                 function run() {
                    // get the value of the data
                    var value = lang;
                    term.send('notepad build/index/samples/sample.'+value+'.txt \r');
                    
                    
                 }

                
                    
                   
              
                       
                 
                