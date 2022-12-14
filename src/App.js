import "./App.css";
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grammarly clientId="client_B6f6ozg5b1om4ZWWvzDh6b">
          <div className="heading">
          <h2>Improve Your Spell Writing skills with Us</h2>
          </div>
          
      
          <GrammarlyEditorPlugin>
            <textarea
              rows={15}
              cols={80}
              contenteditable="true"
              placeholder="Write something here...!!!"
              style={{
                borderRadius: "25px",
                border: "2px solid cyan",
                marginTop: "75px",
                padding: "10px",
                color: "#333",
              }}
            ></textarea>
          </GrammarlyEditorPlugin>
        </Grammarly>
      </header>
    </div>
  );
}

export default App;
