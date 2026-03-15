'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CONTRACT_TEMPLATES, generateFromTemplate } from '@/lib/document-templates/contract-templates'
import { Download, Copy, Eye } from 'lucide-react'

export default function DocumentGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState(CONTRACT_TEMPLATES[0].id)
  const [variables, setVariables] = useState<Record<string, string>>({})
  const [preview, setPreview] = useState(false)

  const currentTemplate = CONTRACT_TEMPLATES.find(t => t.id === selectedTemplate)
  const generatedDocument = currentTemplate ? generateFromTemplate(selectedTemplate, variables) : ''

  const handleVariableChange = (varName: string, value: string) => {
    setVariables(prev => ({ ...prev, [varName]: value }))
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(generatedDocument))
    element.setAttribute('download', `${currentTemplate?.name || 'dokument'}.txt`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDocument)
    alert('Dokument skopiowany do schowka!')
  }

  return (
    <div className="space-y-6">
      {/* Template Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-blue-600/15 border-blue-500/30 p-6">
          <label className="block text-sm font-semibold text-blue-200 mb-3">
            Wybierz szablon dokumentu
          </label>
          <div className="space-y-2">
            {CONTRACT_TEMPLATES.map(template => (
              <button
                key={template.id}
                onClick={() => {
                  setSelectedTemplate(template.id)
                  setVariables({})
                  setPreview(false)
                }}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  selectedTemplate === template.id
                    ? 'bg-cyan-600/30 border border-cyan-500 text-cyan-300'
                    : 'bg-slate-700/30 border border-slate-600 text-blue-200 hover:border-blue-500'
                }`}
              >
                <div className="font-semibold">{template.name}</div>
                <div className="text-xs opacity-70">{template.description}</div>
              </button>
            ))}
          </div>
        </Card>

        {/* Variables Input */}
        <Card className="bg-purple-600/15 border-purple-500/30 p-6">
          <label className="block text-sm font-semibold text-purple-200 mb-3">
            Uzupełnij dane
          </label>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {currentTemplate?.variables.map(varName => (
              <div key={varName}>
                <label className="text-xs text-purple-200/70 block mb-1 capitalize">
                  {varName.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type="text"
                  value={variables[varName] || ''}
                  onChange={(e) => handleVariableChange(varName, e.target.value)}
                  placeholder={`np. ${varName}`}
                  className="w-full px-3 py-2 bg-slate-800 border border-purple-500/30 rounded text-white text-sm focus:border-purple-500/60 focus:outline-none"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Preview */}
      {preview && (
        <Card className="bg-slate-800/50 border border-white/10 p-6 max-h-96 overflow-y-auto">
          <div className="whitespace-pre-wrap text-blue-200/80 font-mono text-sm leading-relaxed">
            {generatedDocument}
          </div>
        </Card>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={() => setPreview(!preview)}
          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          {preview ? 'Ukryj podgląd' : 'Podgląd dokumentu'}
        </Button>
        <Button
          onClick={handleCopy}
          className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 flex items-center justify-center gap-2"
        >
          <Copy className="w-4 h-4" />
          Kopiuj do schowka
        </Button>
        <Button
          onClick={handleDownload}
          className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-2 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Pobierz dokument
        </Button>
      </div>

      {/* Info */}
      <Card className="bg-yellow-600/15 border-yellow-500/30 p-4">
        <p className="text-sm text-yellow-200/80">
          <strong>Wskazówka:</strong> Wszystkie szablony mogą być edytowane po pobraniu. Upewnij się, że dokument spełnia wymogi prawne przed użyciem.
        </p>
      </Card>
    </div>
  )
}
