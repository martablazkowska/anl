import { Component } from '@angular/core';
import { AiService } from '../../services/ai.service';

@Component({
  selector: 'app-ai-search',
  standalone: false,
  templateUrl: './ai-search.component.html',
  styleUrl: './ai-search.component.scss',
})
export class AiSearchComponent {
  public prompt: string = '';

  public promptAnswer: any = '';

  constructor(private aiService: AiService) {}

  ngOnInit(): void {
    this.prompt = 'podaj 2000 najpopularniejszych angielskich słów';
  }

  async OnSendPromptClick() {
    const gptResponse: any = await this.aiService.SendPrompt(this.prompt);

    this.promptAnswer = gptResponse.choices[0].message.content;

    console.log('this.promptAnswer:', this.promptAnswer, gptResponse);
  }
}
