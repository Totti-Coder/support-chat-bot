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

function validarNombre(value) {
  // Verificar si el nombre tiene más de 15 caracteres
  if (value.length > 15) {
    return 'El nombre debe tener máximo 15 caracteres.';
  }

  // Verificar si el nombre contiene números
  if (/\d/.test(value)) {
    return 'El nombre no puede contener números.';
  }

  // Verificar si la primera letra no está en mayúscula
  if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
    return 'El nombre debe comenzar con mayúscula.';
  }

  return true;
}


function App() {
  const steps = [
  {
    id: "1",
    message: "¡Bienvenid@! ¿Cómo te llamas?",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    validator: validarNombre,
    trigger: "3"
  },
  {
    id: "3",
    message: ({ previousValue }) => `Encantad@ de conocerte, ${previousValue}.`,
    trigger: "4"
  },
  {
    id: "4",
    message: "¿En qué puedo ayudarte hoy?",
    trigger: "5"
  },
  {
    id: "5",
    user: true,
    trigger: "6"
  },
  {
    id: "6",
    message: "Perfecto, estaré aquí si me necesitas. 👋",
    end: true
  }
];

  return (
    <div className="chatbot-center">
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