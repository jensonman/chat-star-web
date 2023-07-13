<template>
    <div class="chat-container">
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
      <ChatUnit></ChatUnit>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import ChatUnit from '@/components/chatUnit'
  export default {
    components: {
        ChatUnit
    },
    setup() {
      const messages = ref([
        { id: 1, content: 'Hello, how can I assist you?', isSelf: false },
        { id: 2, content: 'Im here to help!', isSelf: false },
      ]);
      const inputMessage = ref('');
  
      const sendMessage = () => {
        if (inputMessage.value) {
          messages.value.push({ id: messages.value.length + 1, content: inputMessage.value, isSelf: true });
          inputMessage.value = '';
        }
      };
  
      return {
        messages,
        inputMessage,
        sendMessage,
      };
    },
  };
  </script>
  
  <style>
  .chat-container {
    margin: 0 auto;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  .chat-header {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .chat-messages {
    margin-bottom: 20px;
  }
  
  .message {
    display: inline-block;
    background-color: #e6e6e6;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    max-width: 70%;
  }
  
  .message-self {
    background-color: #e2f0fc;
    text-align: right;
  }
  
  .message-content {
    word-break: break-word;
  }
  
  .chat-input {
    display: flex;
    align-items: center;
  }
  
  .input-box {
    flex: 1;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  
  .send-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .send-button:hover {
    background-color: #0056b3;
  }
  
  .send-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  