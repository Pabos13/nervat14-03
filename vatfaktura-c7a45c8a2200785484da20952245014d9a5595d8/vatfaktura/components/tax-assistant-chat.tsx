'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// Knowledge base for the assistant
const TAX_KNOWLEDGE_BASE = {
  pit: [
    { keyword: 'pit', answer: 'PIT to podatek dochodowy od osób fizycznych. Obowiązkowy dla pracowników i przedsiębiorców.' },
    { keyword: 'pit-37', answer: 'PIT-37 to uniwersalny formularz rozliczeniowy. Możesz odliczyć rzeczywiste koszty biznesu.' },
    { keyword: 'pit-36', answer: 'PIT-36 to formularz dla przedsiębiorców. Odliczasz koszty uzyskania przychodu w postaci procentu przychodu.' },
    { keyword: 'pit-36l', answer: 'PIT-36L to formularz dla podatku liniowego 19%. Prostsza forma opodatkowania dla stabilnych biznesów.' },
    { keyword: 'pit-28', answer: 'PIT-28 to formularz dla ryczałtu ewidencjonowanego. Stawka zależy od branży.' },
  ],
  zus: [
    { keyword: 'zus', answer: 'ZUS to Zakład Ubezpieczeń Społecznych. Obowiązkowy dla przedsiębiorców. Składki na emeryturę, rentę, chorobę i zdrowotne.' },
    { keyword: 'składka', answer: 'Składka ZUS to opłata do ubezpieczeń społecznych. Wynosi około 20-24% przychodu dla przedsiębiorców.' },
    { keyword: 'emerytury', answer: 'Emerytura z ZUS jest obliczana na podstawie opłaconych składek emerytalnych przez lata pracy.' },
  ],
  ksef: [
    { keyword: 'ksef', answer: 'KSEF to Krajowy System e-Faktur. Od 1 lipca 2022 r. obowiązkowy dla firm. Faktury wysyłane elektronicznie do systemu.' },
    { keyword: 'e-faktura', answer: 'E-faktura to faktura wysłana elektronicznie przez KSEF. Muszą zawierać określone dane i być w formacie XML.' },
    { keyword: 'faktury', answer: 'Faktury to dokumenty potwierdzające transakcję. Muszą zawierać: datę, numer, strony transakcji, opis i kwotę.' },
  ],
  koszty: [
    { keyword: 'koszty', answer: 'Koszty biznesu to wydatki związane z prowadzeniem działalności. Mogą być odliczane od przychodu.' },
    { keyword: 'kup', answer: 'KUP (Koszty Uzyskania Przychodu) to procent przychodu, który możesz odliczyć jako koszt. Zależy od branży (30-80%).' },
    { keyword: 'wydatki', answer: 'Wydatki to pieniądze wydane z biznesu. Muszą być dokumentowane i uzasadnione biznesem.' },
  ],
  forma: [
    { keyword: 'forma', answer: 'Forma opodatkowania to sposób, w jaki rozliczasz podatki. Dostępne: PIT-37, PIT-36, liniowy, ryczałt, skalą.' },
    { keyword: 'działalność', answer: 'Działalność gospodarcza to najprosta forma biznesu. Rejestrujesz się w CEIDG. Brak wymogu wpisu do rejestru spółek.' },
    { keyword: 'spółka', answer: 'Spółka to forma bardziej zaawansowana niż działalność. Dostępne: sp. z o.o., sp. z ograniczoną odpowiedzialnością, S.A.' },
  ]
}

export default function TaxAssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Cześć! Jestem asystentem podatkowym VAT Faktury. Mogę odpowiadać na pytania dotyczące PIT, ZUS, KSEF, kosztów biznesu i wyborów form opodatkowania. Jakie masz pytanie?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase()
    
    for (const category of Object.values(TAX_KNOWLEDGE_BASE)) {
      for (const item of category) {
        if (lowerQuery.includes(item.keyword)) {
          return item.answer
        }
      }
    }

    // Generic responses
    if (lowerQuery.includes('cześć') || lowerQuery.includes('hej') || lowerQuery.includes('hello')) {
      return 'Cześć! Jak się masz? Mogę ci pomóc w kwestiach podatkowych i biznesowych.'
    }
    
    if (lowerQuery.includes('dziękuję') || lowerQuery.includes('dzięki')) {
      return 'Z chęcią! Mam nadzieję, że pomogłem. Jeszcze pytania?'
    }

    if (lowerQuery.includes('pomóc') || lowerQuery.includes('help')) {
      return 'Mogę ci pomóc w: PIT, ZUS, KSEF, formach opodatkowania, kosztach biznesu i innych kwestiach podatkowych. O czym chcesz wiedzieć?'
    }

    return 'Dziękuję za pytanie! Twoje pytanie dotyczy tematu, na który mogę nie mieć pełnej odpowiedzi. Polecam skonsultować się z doradcą podatkowym lub sprawdzić sekcję FAQ. Ale mogę spróbować pomóc - możesz mi powiedzieć bardziej o co ci chodzi?'
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate response delay
    setTimeout(() => {
      const answer = findAnswer(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: answer,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-6 space-y-4 max-h-96">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-cyan-600/30 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
            )}
            
            <div
              className={`max-w-xs lg:max-w-md xl:max-w-lg rounded-lg px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-cyan-600/30 border border-cyan-500/50 text-cyan-200'
                  : 'bg-blue-600/20 border border-blue-500/30 text-blue-200'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-50 mt-1">{message.timestamp.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>

            {message.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-400" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-cyan-600/30 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Zadaj pytanie o podatki, ZUS, KSEF..."
          className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-blue-200/40 focus:border-cyan-500/60 focus:outline-none"
        />
        <Button
          onClick={handleSendMessage}
          disabled={!input.trim() || isLoading}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-4 py-3 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Suggested Questions */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-blue-200/60 mb-2">Przykładowe pytania:</p>
        <div className="flex flex-wrap gap-2">
          {['Co to PIT-36?', 'Ile kosztuje ZUS?', 'Co to KSEF?', 'Jak wybrać formę opodatkowania?'].map(question => (
            <button
              key={question}
              onClick={() => {
                setInput(question)
                setTimeout(() => handleSendMessage(), 50)
              }}
              className="text-xs px-3 py-1 bg-slate-800 border border-blue-500/30 text-blue-200 rounded-full hover:border-blue-500/60 transition-all"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
