'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { Container } from '@/components/ui/Container';
import { EditableText } from '@/components/editable/EditableText';
import { Plus, Trash2 } from 'lucide-react';

interface HeroData { tagline?: string; title?: string; subtitle?: string; }
interface IntroData { title?: string; description?: string; }
interface CaseStudy { id: string; client: string; title: string; challenge: string; solution: string; results: string; tags: string[]; }

export default function CaseStudiesEditor() {
  const { content, updateContent } = useAdmin();
  
  if (!content?.caseStudies) {
    return <div className="text-white">Loading content...</div>;
  }

  const caseStudiesContent = content.caseStudies as Record<string, unknown>;
  const hero = (caseStudiesContent.hero || {}) as HeroData;
  const intro = (caseStudiesContent.intro || {}) as IntroData;
  const studies = (caseStudiesContent.studies || []) as CaseStudy[];

  const updateHero = (field: string, value: string) => {
    updateContent('caseStudies', { ...caseStudiesContent, hero: { ...hero, [field]: value } });
  };
  const updateIntro = (field: string, value: string) => {
    updateContent('caseStudies', { ...caseStudiesContent, intro: { ...intro, [field]: value } });
  };

  const updateStudy = (index: number, field: string, value: string) => {
    const newStudies = [...studies];
    newStudies[index] = { ...newStudies[index], [field]: value };
    updateContent('caseStudies', { ...caseStudiesContent, studies: newStudies });
  };

  const addStudy = () => {
    const newStudy: CaseStudy = {
      id: Date.now().toString(),
      client: 'New Client',
      title: 'New Case Study',
      challenge: 'The challenge faced...',
      solution: 'The solution implemented...',
      results: 'Key results achieved...',
      tags: ['AI', 'Technology']
    };
    updateContent('caseStudies', { ...caseStudiesContent, studies: [...studies, newStudy] });
  };

  const deleteStudy = (index: number) => {
    const newStudies = studies.filter((_, i) => i !== index);
    updateContent('caseStudies', { ...caseStudiesContent, studies: newStudies });
  };

  const updateStudyTags = (index: number, tags: string) => {
    const tagArray = tags.split(',').map(t => t.trim());
    const newStudies = [...studies];
    newStudies[index] = { ...newStudies[index], tags: tagArray };
    updateContent('caseStudies', { ...caseStudiesContent, studies: newStudies });
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Case Studies Editor</h1>
        <p className="text-white/60">Click on any text to edit it. Add or remove case studies below.</p>
      </div>

      <div className="space-y-8 pb-32">
        {/* Hero Section */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Hero Section</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Tagline</label><EditableText value={hero.tagline || ''} onChange={(v) => updateHero('tagline', v)} className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={hero.title || ''} onChange={(v) => updateHero('title', v)} className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Subtitle</label><EditableText value={hero.subtitle || ''} onChange={(v) => updateHero('subtitle', v)} className="text-xl font-bold text-white leading-tight" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Intro Paragraphs</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Intro Title</label><EditableText value={intro.title || ''} onChange={(v) => updateIntro('title', v)} className="text-2xl md:text-4xl font-black text-white leading-tight" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Intro Description</label><EditableText value={intro.description || ''} onChange={(v) => updateIntro('description', v)} className="text-lg text-white/70 font-medium leading-relaxed mt-8" /></div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Case Studies</h2>
            <button onClick={addStudy} className="flex items-center gap-2 px-4 py-2 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 transition-colors"><Plus size={18} /> Add Case Study</button>
          </div>
          
          <div className="space-y-4">
            {studies.map((study, index) => (
              <div key={study.id || index} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">Case Study {index + 1}</h3>
                  <button onClick={() => deleteStudy(index)} className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"><Trash2 size={18} /></button>
                </div>
                <div className="space-y-3">
                  <div><label className="block text-xs text-white/60">Client Name</label><EditableText value={study.client} onChange={(v) => updateStudy(index, 'client', v)} className="text-white font-bold" /></div>
                  <div><label className="block text-xs text-white/60">Title/Role</label><EditableText value={study.title || ''} onChange={(v) => updateStudy(index, 'title', v)} className="text-white font-bold" /></div>
                  <div><label className="block text-xs text-white/60">The Challenge</label><EditableText value={study.challenge || ''} onChange={(v) => updateStudy(index, 'challenge', v)} className="text-white/70" /></div>
                  <div><label className="block text-xs text-white/60">The Solution</label><EditableText value={study.solution || ''} onChange={(v) => updateStudy(index, 'solution', v)} className="text-white/70" /></div>
                  <div><label className="block text-xs text-white/60">Key Results</label><EditableText value={study.results || ''} onChange={(v) => updateStudy(index, 'results', v)} className="text-white/70" /></div>
                  <div><label className="block text-xs text-white/60">Tags (comma separated)</label><EditableText value={study.tags?.join(', ') || ''} onChange={(v) => updateStudyTags(index, v)} className="text-white/60 text-sm" /></div>
                </div>
              </div>
            ))}
            
            {studies.length === 0 && (
              <p className="text-center text-white/40 py-8">No case studies yet. Click &quot;Add Case Study&quot; to create one.</p>
            )}
          </div>
        </section>
      </div>
    </Container>
  );
}
