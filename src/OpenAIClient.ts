import axios from "axios";

export default class OpenAIClient {

  async getChessMove(fen: string): Promise<string> {
      try {
        const response = await axios.post('http://192.168.0.110:3000/get-move', { fen });
        return response.data.message.content;
      } catch (error) {
        console.error('Error fetching move from server:', error);
        throw error; // or handle it as per your error handling strategy
      }
    };
    
    
}