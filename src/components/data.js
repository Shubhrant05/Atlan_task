export const data = {
  "models": [
    {
      "id": 1,
      "name": "BERT",
      "category": "Transformer",
      "description": "Bidirectional Encoder Representations from Transformers (BERT) is a pre-trained transformer model developed by Google. BERT is designed to pre-train deep bidirectional representations by jointly conditioning on both left and right context in all layers. As a result, it can capture dependencies from both directions, making it particularly effective for various natural language processing tasks such as text classification, named entity recognition, sentiment analysis, and more.",
      "provider": "Google AI",
      "providerInfo": "Google AI, a division of Alphabet Inc., is dedicated to advancing artificial intelligence research and applications. Google AI provides cutting-edge AI technologies and solutions to address complex challenges across various domains.",
      "likes": 150,
      "codeSnippet": "// Example usage of BERT\nfrom transformers import BertTokenizer, BertModel\n\n# Load pre-trained model tokenizer\ntokenizer = BertTokenizer.from_pretrained('bert-base-uncased')\n\n# Tokenize input text\ntext = \"Replace this with your text\"\ntokenized_text = tokenizer.tokenize(text)\n\n# Print tokenized text\nprint(tokenized_text)\n\n# Load pre-trained model\nmodel = BertModel.from_pretrained('bert-base-uncased')\n\n# Forward pass, get hidden states\ninput_ids = tokenizer.encode(text, add_special_tokens=True, return_tensors='pt')\noutputs = model(input_ids)\n\n# Print hidden states\nprint(outputs)",
      "useCases": ["Text Classification", "Named Entity Recognition"]
    },
    {
      "id": 2,
      "name": "GPT-3",
      "category": "Transformer",
      "description": "Generative Pre-trained Transformer 3 (GPT-3) is a state-of-the-art language model developed by OpenAI. GPT-3 represents the latest advancement in the GPT series, featuring an impressive 175 billion parameters. This massive scale allows GPT-3 to generate highly coherent and contextually relevant text across a wide range of tasks, including text generation, question answering, summarization, and more. With its remarkable capabilities, GPT-3 has garnered widespread attention and adoption in both research and industry.",
      "provider": "OpenAI",
      "providerInfo": "OpenAI, an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc., is dedicated to ensuring that artificial general intelligence benefits all of humanity. OpenAI conducts cutting-edge research and development in the field of artificial intelligence, with a focus on safety and ethical concerns.",
      "likes": 120,
      "codeSnippet": "// Example usage of GPT-3\nimport openai\n\n# Set your OpenAI API key\nopenai.api_key = 'your-openai-api-key'\n\n# Generate text\nresponse = openai.Completion.create(\n  engine='davinci',\n  prompt='Translate the following English text to French:',\n  temperature=0.7,\n  max_tokens=100\n)\n\n# Print generated text\nprint(response.choices[0].text.strip())",
      "useCases": ["Text Generation", "Question Answering"]
    },
    {
      "id": 3,
      "name": "XLNet",
      "category": "Transformer",
      "description": "XLNet is an autoregressive pre-trained language model that has been trained on a massive dataset. Unlike traditional autoregressive models, XLNet employs a permutation-based training approach, enabling it to capture bidirectional context while maintaining the benefits of an autoregressive model. This unique design allows XLNet to achieve state-of-the-art performance across various natural language processing tasks, including text generation, text classification, sentiment analysis, and more.",
      "provider": "Google AI",
      "providerInfo": "Google AI, a division of Alphabet Inc., is dedicated to advancing artificial intelligence research and applications. Google AI provides cutting-edge AI technologies and solutions to address complex challenges across various domains.",
      "likes": 200,
      "codeSnippet": "// Example usage of XLNet\nfrom transformers import XLNetTokenizer, XLNetLMHeadModel\n\n# Load pre-trained model tokenizer\ntokenizer = XLNetTokenizer.from_pretrained('xlnet-base-cased')\n\n# Tokenize input text\ntext = \"Replace this with your text\"\ntokenized_text = tokenizer.encode(text, add_special_tokens=True, return_tensors='pt')\n\n# Print tokenized text\nprint(tokenized_text)\n\n# Load pre-trained model\nmodel = XLNetLMHeadModel.from_pretrained('xlnet-base-cased')\n\n# Forward pass, generate text\noutputs = model.generate(tokenized_text, max_length=100, num_return_sequences=1)\n\n# Decode generated text\ndecoded_text = tokenizer.decode(outputs[0], skip_special_tokens=True)\n\n# Print generated text\nprint(decoded_text)",
      "useCases": ["Text Generation", "Text Classification"]
    },
    {
      "id": 4,
      "name": "T5",
      "category": "Transformer",
      "description": "Text-to-Text Transfer Transformer (T5) is a versatile language model developed by Google. T5 is unique in that it frames all NLP tasks as text-to-text transformations, where both inputs and outputs are textual. This unified approach enables T5 to perform a wide range of natural language processing tasks, including text generation, language translation, text classification, and more, with consistent and state-of-the-art performance.",
      "provider": "Google AI",
      "providerInfo": "Google AI, a division of Alphabet Inc., is dedicated to advancing artificial intelligence research and applications. Google AI provides cutting-edge AI technologies and solutions to address complex challenges across various domains.",
      "likes": 90,
      "codeSnippet": "// Example usage of T5\nfrom transformers import T5Tokenizer, T5ForConditionalGeneration\n\n# Load pre-trained model tokenizer\ntokenizer = T5Tokenizer.from_pretrained('t5-small')\n\n# Tokenize input text\ntext = \"Translate this text to French:\"\ntokenized_text = tokenizer.encode(text, return_tensors='pt')\n\n# Print tokenized text\nprint(tokenized_text)\n\n# Load pre-trained model\nmodel = T5ForConditionalGeneration.from_pretrained('t5-small')\n\n# Forward pass, generate text\noutputs = model.generate(tokenized_text, max_length=100, num_return_sequences=1)\n\n# Decode generated text\ndecoded_text = tokenizer.decode(outputs[0], skip_special_tokens=True)\n\n# Print generated text\nprint(decoded_text)",
      "useCases": ["Text Generation", "Language Translation"]
    },
    {
      "id": 5,
      "name": "RoBERTa",
      "category": "Transformer",
      "description": "Robustly optimized BERT approach (RoBERTa) is a modification of the BERT model developed by Facebook AI. RoBERTa builds upon the success of BERT by introducing key optimizations in training objectives, data processing, and model architecture. These optimizations result in improved performance and robustness across various natural language processing tasks, including text classification, question answering, text generation, and more.",
      "provider": "Facebook AI",
      "providerInfo": "Facebook AI, founded in 2013, is a research organization committed to advancing the field of artificial intelligence. Led by renowned experts in AI and machine learning, Facebook AI conducts cutting-edge research to address some of the most challenging problems in the field. With a focus on developing open-source tools and sharing knowledge with the research community, Facebook AI aims to accelerate the progress of AI and make it accessible to everyone.",
      "likes": 180,
      "codeSnippet": "// Example usage of RoBERTa\nfrom transformers import RobertaTokenizer, RobertaForMaskedLM\n\n# Load pre-trained model tokenizer\ntokenizer = RobertaTokenizer.from_pretrained(',roberta-base')\n\n# Tokenize input text\ntext = \"Replace this with your text\"\ntokenized_text = tokenizer.encode(text, add_special_tokens=True, return_tensors='pt')\n\n# Print tokenized text\nprint(tokenized_text)\n\n# Load pre-trained model\nmodel = RobertaForMaskedLM.from_pretrained('roberta-base')\n\n# Forward pass, predict masked tokens\noutputs = model(tokenized_text)\n\n# Print predicted tokens\nprint(tokenizer.decode(outputs[0][0].argmax(dim=-1)))",
      "useCases": ["Text Classification", "Question Answering"]
    },    
    {
      "id": 6,
      "name": "GPT-2",
      "category": "Transformer",
      "description": "Generative Pre-trained Transformer 2 (GPT-2) is an earlier version of the GPT series developed by OpenAI. It is known for its remarkable capability in generating human-like text based on the input provided. GPT-2 has been trained on a diverse range of internet text and exhibits impressive fluency and coherence in generating natural language text. With its large number of parameters and sophisticated architecture, GPT-2 is a powerful tool for various natural language processing tasks, including text generation, summarization, and more.",
      "provider": "OpenAI",
      "providerInfo": "OpenAI, founded in 2015 by Elon Musk and others, is dedicated to ensuring that artificial general intelligence benefits all of humanity. OpenAI conducts cutting-edge research and development in the field of artificial intelligence, with a focus on safety and ethical concerns. OpenAI provides state-of-the-art AI technologies and solutions to address complex challenges across various domains.",
      "likes": 60,
      "codeSnippet": "from transformers import GPT2Tokenizer, GPT2LMHeadModel\n\ntokenizer = GPT2Tokenizer.from_pretrained('gpt2')\nmodel = GPT2LMHeadModel.from_pretrained('gpt2')\n\nprompt_text = 'Once upon a time, '\ninput_ids = tokenizer.encode(prompt_text, return_tensors='pt')\n\noutput = model.generate(input_ids, max_length=100, num_return_sequences=1)\nprint(tokenizer.decode(output[0], skip_special_tokens=True))",
      "useCases": ["Text Generation", "Summarization"]
    },
    {
      "id": 7,
      "name": "ALBERT",
      "category": "Transformer",
      "description": "A Lite BERT (ALBERT) model is a more compact version of the original BERT model developed by Google AI. ALBERT achieves its compactness by using parameter reduction techniques such as factorized embedding parameterization, cross-layer parameter sharing, and inter-sentence coherence loss. Despite its smaller size, ALBERT retains most of the performance of the original BERT model, making it suitable for resource-constrained environments. ALBERT has been widely adopted in various natural language processing tasks, including text classification, named entity recognition, and more.",
      "provider": "Google AI",
      "providerInfo": "Google AI, founded in 2010 by Larry Page and Sergey Brin, is dedicated to advancing artificial intelligence research and applications. Google AI provides cutting-edge AI technologies and solutions to address complex challenges across various domains. With a focus on innovation and scalability, Google AI has established itself as a leader in the field of artificial intelligence.",
      "likes": 220,
      "codeSnippet": "from transformers import AlbertTokenizer, AlbertForSequenceClassification\n\ntokenizer = AlbertTokenizer.from_pretrained('albert-base-v2')\nmodel = AlbertForSequenceClassification.from_pretrained('albert-base-v2')\n\ntext = 'Example text for classification.'\ninput_ids = tokenizer.encode(text, return_tensors='pt')\n\noutput = model(input_ids)\nprint(output)",    
      "useCases": ["Text Classification", "Named Entity Recognition"]
    },
    {
      "id": 8,
      "name": "DistilBERT",
      "category": "Transformer",
      "description": "DistilBERT is a distilled version of the BERT model developed by Hugging Face. It aims to reduce the memory footprint and computational cost of the original BERT model while retaining most of its performance. DistilBERT achieves this by using a smaller architecture and applying knowledge distillation during training. Despite its reduced size, DistilBERT maintains competitive performance on various natural language processing tasks, including text classification, language understanding, and more.",
      "provider": "Hugging Face",
      "providerInfo": "Hugging Face, founded in 2016 by Clément Delangue, Sam Shleifer, and Julien Chaumond, is a leading provider of state-of-the-art natural language processing models and tools. Hugging Face focuses on democratizing AI and making it accessible to developers and researchers worldwide. With a vibrant community and a commitment to open-source collaboration, Hugging Face has revolutionized the landscape of NLP.",
      "likes": 110,
      "codeSnippet": "from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering\n\ntokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')\nmodel = DistilBertForQuestionAnswering.from_pretrained('distilbert-base-uncased')\n\nquestion = 'What is the capital of France?'\ncontext = 'Paris is the capital of France.'\n\ninputs = tokenizer.encode_plus(question, context, return_tensors='pt', max_length=512, truncation_strategy='only_second')\n\noutputs = model(**inputs)\nstart_scores, end_scores = outputs.start_logits, outputs.end_logits\nprint(start_scores, end_scores)",
      "useCases": ["Text Classification", "Language Understanding"]
    },
    {
      "id": 9,
      "name": "Electra",
      "category": "xxx",
      "description": "ELECTRA is a pre-trained language model based on the transformer architecture, developed by Google AI. Unlike traditional masked language models such as BERT, ELECTRA adopts a novel approach called 'replaced token detection' during pre-training, which allows for more efficient training and better parameter utilization. ELECTRA has demonstrated strong performance on various natural language processing tasks, including text generation, language modeling, and more.",
      "provider": "Google AI",
      "providerInfo": "Google AI, founded in 2010 by Larry Page and Sergey Brin, is dedicated to advancing artificial intelligence research and applications. Google AI provides cutting-edge AI technologies and solutions to address complex challenges across various domains. With a focus on innovation and scalability, Google AI has established itself as a leader in the field of artificial intelligence.",
      "likes": 130,
      "codeSnippet": "from transformers import ElectraTokenizer, ElectraForMaskedLM\n\ntokenizer = ElectraTokenizer.from_pretrained('google/electra-small-discriminator')\nmodel = ElectraForMaskedLM.from_pretrained('google/electra-small-discriminator')\n\ntext = 'The quick brown [MASK] jumps over the lazy dog.'\ninput_ids = tokenizer.encode(text, return_tensors='pt')\n\noutput = model(input_ids)\nlogits = output.logits\nprint(logits)",
      "useCases": ["Text Generation", "Language Modeling"]
    },
    {
      "id": 10,
      "name": "CTRL",
      "category": "Transformer",
      "description": "CTRL is a conditional transformer language model designed for text generation, developed by Salesforce. Unlike traditional autoregressive language models, CTRL allows for fine-grained control over the generated text by conditioning on specific prompts or attributes. This enables users to influence the style, content, and tone of the generated text, making CTRL suitable for various text generation tasks",
      "provider": "Salesforce",
      "providerInfo": "Salesforce, founded in 1999 by Marc Benioff and Parker Harris, is a leading provider of cloud-based software solutions for customer relationship management. Salesforce empowers organizations to connect with their customers in entirely new ways, leveraging the power of artificial intelligence, data analytics, and automation. With a commitment to innovation and customer success, Salesforce continues to redefine the future of business.",
      "likes": 170,
      "codeSnippet": "from transformers import CTRLTokenizer, CTRLLMHeadModel\n\ntokenizer = CTRLTokenizer.from_pretrained('ctrl')\nmodel = CTRLLMHeadModel.from_pretrained('ctrl')\n\nprompt_text = 'Once upon a time, '\ninput_ids = tokenizer.encode(prompt_text, return_tensors='pt')\n\noutput = model.generate(input_ids, max_length=100, num_return_sequences=1)\nprint(tokenizer.decode(output[0], skip_special_tokens=True))",
      "useCases": ["Text Generation", "Dialogue Generation"]
    }
    
  ]
}