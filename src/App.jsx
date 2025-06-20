import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import './App.css';

const DiseñoChat = {
  background: '#f5f8fb',
  fontFamily: 'sans-serif',
  headerBgColor: '#00bcd4',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00bcd4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function App() {
  const steps = [
    { id: "1", message: "Bienvenido, ¿qué necesitas?", trigger: "2" },
    { id: "2", user: true, trigger: "3" },
    { id: "3", message: "Gracias por tu mensaje, ¿algo más?", trigger: "4" },
    { id: "4", user: true, trigger: "5" },
    { id: "5", message: "Perfecto, estaré aquí si me necesitas. 👋", end: true }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ThemeProvider theme={DiseñoChat}>
        <ChatBot 
          steps={steps}
          headerTitle="Support"
          speechSynthesis={{ enable: true, lang: "es" }}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;