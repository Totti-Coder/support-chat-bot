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
      options: [
        { value: "info", label: "Información general", trigger: "info" },
        { value: "soporte", label: "Soporte técnico", trigger: "soporte" },
        { value: "contacto", label: "Información de contacto", trigger: "contacto" },
        { value: "otros", label: "Otros temas", trigger: "otros" }
      ]
    },
    // Respuestas para cada opción
    {
      id: "info",
      message: "Esta página web está dedicada a la venta de café en cápsulas.",
      trigger: "mas_info"
    },
    {
      id: "mas_info",
      options: [
        { 
          value: "copiar", 
          label: "📋 Ver instrucciones", 
          trigger: "instrucciones" 
        },
        { 
          value: "volver", 
          label: "⬅️ Volver al menú", 
          trigger: "4" 
        }
      ]
    },
    {
      id: "instrucciones",
      component: (
        <div style={{ padding: '15px' }}>
          <div style={{ marginBottom: '15px', fontSize: '14px', color: '#333' }}>
            🎯 <strong>Haz clic para acceder a la tienda:</strong>
          </div>
          
          {/* Enlace clickeable */}
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <a 
              href="file:///C:/Users/34644/Desktop/Reponsive%20Web/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#00bcd4',
                color: 'tra',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,188,212,0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#0097a7';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,188,212,0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#00bcd4';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,188,212,0.3)';
              }}
            >
              ☕ ABRIR TIENDA DE CAFÉ ☕
            </a>
          </div>

          {/* Botón alternativo con JavaScript */}
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <button
              onClick={() => {
                // Intenta diferentes métodos
                try {
                  window.open('file:///C:/Users/34644/Desktop/Reponsive%20Web/index.html', '_blank');
                } catch (error) {
                  // Si falla, copia al portapapeles
                  navigator.clipboard.writeText('C:\\Users\\34644\\Desktop\\Reponsive Web\\index.html')
                    .then(() => alert('¡Ruta copiada al portapapeles! Pégala en tu navegador.'))
                    .catch(() => alert('Por favor copia manualmente: C:\\Users\\34644\\Desktop\\Reponsive Web\\index.html'));
                }
              }} 
            >
            </button>
          </div>
        </div>
      ),
      trigger: "continuar"
    },
    {
      id: "soporte",
      message: "Estoy aquí para ayudarte con cualquier problema técnico. Por favor, describe tu consulta.",
      trigger: "continuar"
    },
    {
      id: "contacto",
      message: "Puedes contactarnos por email: support@empresa.com o teléfono: +34 123 456 789",
      trigger: "continuar"
    },
    {
      id: "otros",
      message: "Cuéntame en qué más puedo ayudarte.",
      trigger: "continuar"
    },
    {
      id: "continuar",
      options: [
        { value: "si", label: "Tengo otra consulta", trigger: "4" },
        { value: "no", label: "No, gracias", trigger: "despedida" }
      ]
    },
    {
      id: "despedida",
      message: "¡Perfecto! Ha sido un placer ayudarte. ¡Que tengas un excelente día! 👋",
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