import { QuoteFormData, CalculatorFormData } from '../types';

export const sendQuoteRequest = async (data: QuoteFormData): Promise<boolean> => {
  try {
    const response = await fetch('/mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'QUOTE',
        data: data
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return true;
  } catch (error) {
    console.error("Email Error:", error);
    return false;
  }
};

export const sendCalculationRequest = async (data: CalculatorFormData): Promise<boolean> => {
  try {
    const response = await fetch('/mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'CALCULATOR',
        data: data
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return true;
  } catch (error) {
    console.error("Email Error:", error);
    return false;
  }
};