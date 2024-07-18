import { ICustomWorld } from './../../pages/world';



export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


export function generateRandomNumber(length: number): string {
  const digits = '0123456789';
  let randomNumber = '';

  for (let i = 0; i < length; i++) {
    randomNumber += digits[Math.floor(Math.random() * digits.length)];
  }

  return randomNumber;
}
































export function getRandomIndexNotFirst(max: number): number {
  // Generate a random index excluding the first element
  return Math.floor(Math.random() * (max - 1)) + 1;
}
export function getRandomIndexNotLast(max: number): number {
  const adjustedMax = max - 1;
  return Math.floor(Math.random() * adjustedMax);
}

export function getRandomIndex(max: number): number {
  return Math.floor(Math.random() * max);
}

export function addWhiteSpaceToText(text: string) {
  const resultText = text.replace(text, ` ${text} `);
  return resultText;
}

export async function getTextContent(this: ICustomWorld, selector: string): Promise<string> {
  const element = await this.page?.waitForSelector(selector, { state: 'visible' });
  return (await element?.textContent()) as string;
}

export async function scrollToTop(this: ICustomWorld) {
  const element = await this.page?.evaluate(() => {
    window.scrollTo(0, 0);
  });
  return element;
}

export function getTextAfterDollar(inputString: string): string | null {
  const match = inputString.match(/\$([0-9.]+)/);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

export function multiplyNumbersInArray(arr: (string | number)[]): number {
  return arr
    .map((value) => (typeof value === 'string' ? parseFloat(value) : value))
    .filter((value) => typeof value === 'number' && !isNaN(value))
    .reduce((acc, currentValue) => acc * currentValue, 1);
}

// Helper function to format date
export function getFormattedDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString(undefined, options);
}

//Function to rearrange the date to MM/DD/YY
export async function reFormatDate(inputDate: string) {
  const date = new Date(inputDate);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${day}/${year}`;
}

// Function to extract the first two characters (month) from an array of strings
export function extractMonth(dateString: string): string {
  // Split the date string by '/'
  const parts = dateString.split('/');
  // Return the first two characters
  return parts[0];
}

export function generateCombinations(arr: string[], index: number = 0, currentCombination: number[] = []): number[] {
  const result: number[] = [];
  const numericArr = arr.map(Number);
  // Recursive call to calculate combinations with subsequent elements
  for (let i = index; i < numericArr.length; i++) {
    const nextCombination = [...currentCombination, numericArr[i]];
    const product = nextCombination.reduce((acc, value) => acc * value, 1);
    const roundedProduct = parseFloat(product.toFixed(2));
    result.push(roundedProduct);
    result.push(...generateCombinations(arr, i + 1, nextCombination));
  }

  return result;
}

// To tolerate a small difference in your test assertions example: 0.01 tolerance
export function approximatelyEqual(value1: number, value2: number, tolerance: number): boolean {
  return Math.abs(value1 - value2) <= tolerance;
}

export async function waitForElementChange(this: ICustomWorld, selector: string): Promise<void> {
  const hasElementChanged = async (): Promise<boolean> => {
    const element = await this.page?.waitForSelector(selector);
    const currentText = await this.page?.evaluate((el) => el?.textContent?.trim(), element);
    return !!(currentText && !(currentText.includes('0.00') || currentText.includes('--')));
  };

  let attempts = 0;
  const maxAttempts = 30;
  const pollInterval = 500;

  while (!(await hasElementChanged()) && attempts < maxAttempts) {
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await this.page?.waitForTimeout(pollInterval);
    attempts++;
  }
}

export function getRandomIndexNotPresentInArray(length: number, excludedNumbers: number[] = []): number {
  let randomIndex: number;
  do {
    randomIndex = Math.floor(Math.random() * (length - 1)) + 1; // Start from index 1
  } while (excludedNumbers.includes(randomIndex));
  return randomIndex;
}