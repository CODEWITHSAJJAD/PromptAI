/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { Container } from '@/components/ui/Container';
import { EditableText } from '@/components/editable/EditableText';
import { Plus, Trash2 } from 'lucide-react';

interface HeroData { tagline?: string; title?: string; subtitle?: string; }
interface IntroData { title?: string; subtitle?: string; topics?: string[]; }
interface Insight { id: string; title: string; excerpt: string; category: string; date: string; readTime: string; }

export default function InsightsEditor() {
  const { content, updateContent } = useAdmin();
  
  if (!content?.insights) {
    return <div className="text-white">Loading content...</div>;
  }

  const insightsContent = content.insights as Record<string, unknown>;
  const hero = (insightsContent.hero || {}) as HeroData;
  const intro = (insightsContent.intro || { topics: [] }) as IntroData;
  const articles = (insightsContent.articles || []) as Insight[];

  const updateHero = (field: string, value: string) => {
    updateContent('insights', { ...insightsContent, hero: { ...hero, [field]: value } });
  };
  const updateIntro = (field: string, value: any) => {
    updateContent('insights', { ...insightsContent, intro: { ...intro, [field]: value } });
  };
  
  const updateTopic = (index: number, value: string) => {
    const topics = [...(intro.topics || [])];
    topics[index] = value;
    updateIntro('topics', topics);
  };
  const addTopic = () => {
    const topics = [...(intro.topics || []), "New Topic"];
    updateIntro('topics', topics);
  };
  const deleteTopic = (index: number) => {
    const topics = (intro.topics || []).filter((_, i) => i !== index);
    updateIntro('topics', topics);
  };

  const updateArticle = (index: number, field: string, value: string) => {
    const newArticles = [...articles];
    newArticles[index] = { ...newArticles[index], [field]: value };
    updateContent('insights', { ...insightsContent, articles: newArticles });
  };

  const addArticle = () => {
    const newArticle: Insight = {
      id: Date.now().toString(),
      title: 'New Article',
      excerpt: 'Write your article excerpt here...',
      category: 'Category',
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read'
    };
    updateContent('insights', { ...insightsContent, articles: [...articles, newArticle] });
  };

  const deleteArticle = (index: number) => {
    const newArticles = articles.filter((_, i) => i !== index);
    updateContent('insights', { ...insightsContent, articles: newArticles });
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Insights Editor</h1>
        <p className="text-white/60">Click on any text to edit it. Add or remove articles below.</p>
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Intro Paragraphs</h2>
            <button onClick={addTopic} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add Topic</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Intro Title</label><EditableText value={intro.title || ''} onChange={(v) => updateIntro('title', v)} className="text-2xl md:text-3xl font-black text-white leading-tight" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Intro Subtitle</label><EditableText value={intro.subtitle || ''} onChange={(v) => updateIntro('subtitle', v)} className="text-lg text-white/70 font-medium leading-relaxed" /></div>
            <div className="pt-4 border-t border-white/10">
              <label className="block text-sm text-white/60 mb-2">Topics List</label>
              {(intro.topics || []).map((topic, index) => (
                <div key={index} className="flex gap-2 items-center mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3500]" />
                  <EditableText value={topic} onChange={(v) => updateTopic(index, v)} className="flex-1 text-sm font-bold text-white/80 uppercase tracking-tight" />
                  <button onClick={() => deleteTopic(index)} className="text-red-400 p-2 hover:text-red-300"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Articles</h2>
            <button onClick={addArticle} className="flex items-center gap-2 px-4 py-2 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 transition-colors"><Plus size={18} /> Add Article</button>
          </div>
          
          <div className="space-y-4">
            {articles.map((article, index) => (
              <div key={article.id || index} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">Article {index + 1}</h3>
                  <button onClick={() => deleteArticle(index)} className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"><Trash2 size={18} /></button>
                </div>
                <div className="space-y-3">
                  <div><label className="block text-xs text-white/60">Title</label><EditableText value={article.title || ''} onChange={(v) => updateArticle(index, 'title', v)} className="text-white font-bold" /></div>
                  <div><label className="block text-xs text-white/60">Excerpt</label><EditableText value={article.excerpt || ''} onChange={(v) => updateArticle(index, 'excerpt', v)} className="text-white/70" /></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div><label className="block text-xs text-white/60">Category</label><EditableText value={article.category || ''} onChange={(v) => updateArticle(index, 'category', v)} className="text-white/60 text-sm" /></div>
                    <div><label className="block text-xs text-white/60">Date</label><EditableText value={article.date || ''} onChange={(v) => updateArticle(index, 'date', v)} className="text-white/60 text-sm" /></div>
                    <div><label className="block text-xs text-white/60">Read Time</label><EditableText value={article.readTime || ''} onChange={(v) => updateArticle(index, 'readTime', v)} className="text-white/60 text-sm" /></div>
                  </div>
                </div>
              </div>
            ))}
            
            {articles.length === 0 && (
              <p className="text-center text-white/40 py-8">No articles yet. Click &quot;Add Article&quot; to create one.</p>
            )}
          </div>
        </section>
      </div>
    </Container>
  );
}
