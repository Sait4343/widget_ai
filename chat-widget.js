
// chat-widget.js
(function() {
    const styles = `
        .n8n-chat-widget {
            --chat--color-primary: var(--n8n-chat-primary-color, #854fff);
            --chat--color-secondary: var(--n8n-chat-secondary-color, #6b3fd4);
            --chat--color-background: var(--n8n-chat-background-color, #ffffff);
            --chat--color-font: var(--n8n-chat-font-color, #333333);
            font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .n8n-chat-widget .chat-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: none;
            width: 380px;
            height: 600px;
            background: var(--chat--color-background);
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(133, 79, 255, 0.15);
            border: 1px solid rgba(133, 79, 255, 0.2);
            overflow: hidden;
            font-family: inherit;
            transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
            .n8n-chat-widget .chat-container {
                width: 100vw;
                height: 100vh;
                bottom: 0;
                right: 0;
                left: 0;
                top: 0;
                border-radius: 0;
                box-shadow: none;
                border: none;
            }
        }

        .n8n-chat-widget .chat-container.open {
            display: flex;
            flex-direction: column;
        }

        .n8n-chat-widget .brand-header {
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(133, 79, 255, 0.1);
            position: relative;
        }

        .n8n-chat-widget .close-button {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--chat--color-font);
            cursor: pointer;
            padding: 4px;
            font-size: 22px;
            opacity: 0.6;
            transition: opacity 0.2s;
        }

        .n8n-chat-widget .close-button:hover { opacity: 1; }

        .n8n-chat-widget .brand-header img { width: 32px; height: 32px; }

        .n8n-chat-widget .brand-header span { font-size: 18px; font-weight: 500; color: var(--chat--color-font); }

        .n8n-chat-widget .new-conversation {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            text-align: center;
            width: 100%;
            max-width: 300px;
        }

        .n8n-chat-widget .welcome-text { font-size: 24px; font-weight: 600; color: var(--chat--color-font); margin-bottom: 24px; }

        .n8n-chat-widget .new-chat-btn {
            display: flex; align-items: center; justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 16px 24px;
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 12px;
            transition: transform 0.3s;
        }

        .n8n-chat-widget .new-chat-btn:hover { transform: scale(1.03); }

        .n8n-chat-widget .chat-interface {
            display: none;
            flex-direction: column;
            height: 100%;
        }

        .n8n-chat-widget .chat-interface.active { display: flex; }

        .n8n-chat-widget .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: var(--chat--color-background);
            display: flex;
            flex-direction: column;
        }

        .n8n-chat-widget .chat-message {
            padding: 12px 16px;
            margin: 8px 0;
            border-radius: 12px;
            max-width: 80%;
            font-size: 14px;
            line-height: 1.5;
        }

        .n8n-chat-widget .chat-message.user {
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            align-self: flex-end;
        }

        .n8n-chat-widget .chat-message.bot {
            background: var(--chat--color-background);
            border: 1px solid rgba(133, 79, 255, 0.2);
            color: var(--chat--color-font);
            align-self: flex-start;
        }

        .n8n-chat-widget .chat-input {
            padding: 12px;
            display: flex;
            gap: 8px;
            border-top: 1px solid rgba(133, 79, 255, 0.1);
            background: var(--chat--color-background);
        }

        .n8n-chat-widget .chat-input textarea {
            flex: 1;
            border: 1px solid rgba(133, 79, 255, 0.2);
            border-radius: 8px;
            padding: 10px;
            resize: none;
        }

        .n8n-chat-widget .chat-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(133, 79, 255, 0.3);
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s;
        }

        .n8n-chat-widget .chat-toggle:hover { transform: scale(1.05); }
    `;

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-sans/style.css';
    document.head.appendChild(fontLink);

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    const defaultConfig = {
        webhook: { url: '', route: '' },
        branding: { logo: '', name: 'ШІ-консультант', welcomeText: 'Привіт! 👋 Я – ШІ-консультант.', responseTimeText: 'Відповім за кілька секунд' },
        style: { primaryColor: '#854fff', secondaryColor: '#6b3fd4', position: 'right', backgroundColor: '#fff', fontColor: '#333' }
    };

    if (window.N8NChatWidgetInitialized) return;
    window.N8NChatWidgetInitialized = true;

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'n8n-chat-widget';

    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';

    chatContainer.innerHTML = `
        <div class="brand-header">
            <img src="\${defaultConfig.branding.logo}" alt="\${defaultConfig.branding.name}">
            <span>\${defaultConfig.branding.name}</span>
            <button class="close-button">×</button>
        </div>
        <div class="new-conversation">
            <h2 class="welcome-text">\${defaultConfig.branding.welcomeText}</h2>
            <button class="new-chat-btn">Надіслати повідомлення</button>
            <p class="response-text">\${defaultConfig.branding.responseTimeText}</p>
        </div>
        <div class="chat-interface">
            <div class="brand-header">
                <img src="\${defaultConfig.branding.logo}" alt="\${defaultConfig.branding.name}">
                <span>\${defaultConfig.branding.name}</span>
                <button class="close-button">×</button>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input">
                <textarea placeholder="Повідомлення..."></textarea>
                <button type="submit">Відправити</button>
            </div>
        </div>
    `;

    const toggleButton = document.createElement('button');
    toggleButton.className = 'chat-toggle';
    toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>';

    widgetContainer.appendChild(chatContainer);
    widgetContainer.appendChild(toggleButton);
    document.body.appendChild(widgetContainer);

    const newChatBtn = chatContainer.querySelector('.new-chat-btn');
    const chatInterface = chatContainer.querySelector('.chat-interface');
    const textarea = chatContainer.querySelector('textarea');
    const sendButton = chatContainer.querySelector('button[type="submit"]');

    function openFullChat() {
        chatContainer.classList.add('open');
        chatInterface.classList.add('active');
        chatContainer.querySelector('.new-conversation').style.display = 'none';
    }

    toggleButton.addEventListener('click', () => chatContainer.classList.toggle('open'));
    newChatBtn.addEventListener('click', openFullChat);
    chatContainer.querySelectorAll('.close-button').forEach(btn => btn.addEventListener('click', () => chatContainer.classList.remove('open')));
})();
