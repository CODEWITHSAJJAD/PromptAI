/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { Container } from '@/components/ui/Container';
import { EditableText } from '@/components/editable/EditableText';
import { Plus, Trash2 } from 'lucide-react';

interface HeroData { tagline?: string; title?: string; subtitle?: string; }
interface StatsItem { value: string; label: string; }
interface StatsData { title?: string; items: StatsItem[]; }
interface BenefitItem { title: string; description: string; }
interface BenefitsData { 
  tagline?: string; 
  title?: string; 
  programmesTitle?: string;
  programmesSubtitle?: string;
  programmesDesc1?: string;
  programmesDesc2?: string;
  items: BenefitItem[]; 
}
interface TimelineItem { year: string; title: string; description: string; }
interface TimelineData { tagline?: string; title?: string; items: TimelineItem[]; }

export default function AcademyEditor() {
  const { content, updateContent } = useAdmin();
  
  if (!content?.academy) {
    return <div className="text-white">Loading content...</div>;
  }

  const academyContent = content.academy as Record<string, unknown>;
  const hero = (academyContent.hero || {}) as HeroData;
  const stats = (academyContent.stats || { items: [] }) as StatsData;
  const benefits = (academyContent.benefits || { items: [] }) as BenefitsData;
  const timeline = (academyContent.timeline || { items: [] }) as TimelineData;

  const updateSection = (section: string, field: string, value: any) => {
    const currentSection = (academyContent[section] || {}) as Record<string, unknown>;
    updateContent('academy', { ...academyContent, [section]: { ...currentSection, [field]: value } });
  };

  // Stats CRUD
  const updateStatsItem = (index: number, field: string, value: string) => {
    const items = [...stats.items];
    items[index] = { ...items[index], [field]: value };
    updateContent('academy', { ...academyContent, stats: { ...stats, items } });
  };
  const addStat = () => {
    const newItem = { value: "0", label: "New Stat" };
    updateContent('academy', { ...academyContent, stats: { ...stats, items: [...stats.items, newItem] } });
  };
  const deleteStat = (index: number) => {
    const items = stats.items.filter((_, i) => i !== index);
    updateContent('academy', { ...academyContent, stats: { ...stats, items } });
  };

  // Benefits CRUD
  const updateBenefitItem = (index: number, field: string, value: string) => {
    const items = [...benefits.items];
    items[index] = { ...items[index], [field]: value };
    updateContent('academy', { ...academyContent, benefits: { ...benefits, items } });
  };
  const addBenefit = () => {
    const newItem = { title: "New Benefit", description: "Description here..." };
    updateContent('academy', { ...academyContent, benefits: { ...benefits, items: [...benefits.items, newItem] } });
  };
  const deleteBenefit = (index: number) => {
    const items = benefits.items.filter((_, i) => i !== index);
    updateContent('academy', { ...academyContent, benefits: { ...benefits, items } });
  };

  // Timeline CRUD
  const updateTimelineItem = (index: number, field: string, value: string) => {
    const items = [...timeline.items];
    items[index] = { ...items[index], [field]: value };
    updateContent('academy', { ...academyContent, timeline: { ...timeline, items } });
  };
  const addTimelineItem = () => {
    const newItem = { year: "New", title: "New Phase", description: "Description..." };
    updateContent('academy', { ...academyContent, timeline: { ...timeline, items: [...timeline.items, newItem] } });
  };
  const deleteTimelineItem = (index: number) => {
    const items = timeline.items.filter((_, i) => i !== index);
    updateContent('academy', { ...academyContent, timeline: { ...timeline, items } });
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Academy Page Editor</h1>
        <p className="text-white/60">Click on any text to edit it. Add or remove items below.</p>
      </div>

      <div className="space-y-8 pb-32">
        {/* Hero Section */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Hero Section</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Tagline</label><EditableText value={hero.tagline || ''} onChange={(v) => updateSection('hero', 'tagline', v)} className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={hero.title || ''} onChange={(v) => updateSection('hero', 'title', v)} className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Subtitle</label><EditableText value={hero.subtitle || ''} onChange={(v) => updateSection('hero', 'subtitle', v)} className="text-xl font-bold text-white leading-tight" /></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Stats</h2>
            <button onClick={addStat} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Section Title</label><EditableText value={stats.title || ''} onChange={(v) => updateContent('academy', { ...academyContent, stats: { ...stats, title: v } })} className="text-3xl font-bold text-white" /></div>
            {stats.items.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-white">Stat {index + 1}</h3>
                  <button onClick={() => deleteStat(index)} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs text-white/60">Value</label><EditableText value={item.value} onChange={(v) => updateStatsItem(index, 'value', v)} className="text-white font-bold" /></div>
                  <div><label className="block text-xs text-white/60">Label</label><EditableText value={item.label} onChange={(v) => updateStatsItem(index, 'label', v)} className="text-white/70" /></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Environment (Benefits) */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Learning Environment (Benefits)</h2>
            <button onClick={addBenefit} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add Item</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Tagline</label><EditableText value={benefits.tagline || ''} onChange={(v) => updateSection('benefits', 'tagline', v)} className="text-[#FF3500] text-xs font-black uppercase tracking-[0.3em]" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={benefits.title || ''} onChange={(v) => updateSection('benefits', 'title', v)} className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter" /></div>
            
            <div className="pt-4 border-t border-white/10">
              <label className="block text-sm text-white/60 mb-2">Learn Items</label>
              {benefits.items.map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-bold text-white">Item {index + 1}</h3>
                    <button onClick={() => deleteBenefit(index)} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                  </div>
                  <div className="space-y-2">
                    <div><label className="block text-xs text-white/60">Title</label><EditableText value={item.title} onChange={(v) => updateBenefitItem(index, 'title', v)} className="text-white font-bold" /></div>
                    <div><label className="block text-xs text-white/60">Description</label><EditableText value={item.description} onChange={(v) => updateBenefitItem(index, 'description', v)} className="text-white/70" /></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10"><label className="block text-sm text-white/60 mb-1">Programmes Title</label><EditableText value={benefits.programmesTitle || ''} onChange={(v) => updateSection('benefits', 'programmesTitle', v)} className="text-3xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Programmes Subtitle</label><EditableText value={benefits.programmesSubtitle || ''} onChange={(v) => updateSection('benefits', 'programmesSubtitle', v)} className="text-white font-bold" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Programmes Description 1</label><EditableText value={benefits.programmesDesc1 || ''} onChange={(v) => updateSection('benefits', 'programmesDesc1', v)} className="text-white/70" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Programmes Description 2</label><EditableText value={benefits.programmesDesc2 || ''} onChange={(v) => updateSection('benefits', 'programmesDesc2', v)} className="text-white/70" /></div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">AI Journey Timeline</h2>
            <button onClick={addTimelineItem} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add Event</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Tagline</label><EditableText value={timeline.tagline || ''} onChange={(v) => updateSection('timeline', 'tagline', v)} className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em]" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Section Title</label><EditableText value={timeline.title || ''} onChange={(v) => updateSection('timeline', 'title', v)} className="text-4xl md:text-8xl font-black text-white tracking-tighter" /></div>
            <div className="pt-4 border-t border-white/10">
              {timeline.items.map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-bold text-white">Event {index + 1}</h3>
                    <button onClick={() => deleteTimelineItem(index)} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                  </div>
                  <div className="space-y-2">
                    <div><label className="block text-xs text-white/60">Year/Time</label><EditableText value={item.year} onChange={(v) => updateTimelineItem(index, 'year', v)} className="text-[#FF3500] font-bold" /></div>
                    <div><label className="block text-xs text-white/60">Title/Event</label><EditableText value={item.title} onChange={(v) => updateTimelineItem(index, 'title', v)} className="text-white font-bold" /></div>
                    <div><label className="block text-xs text-white/60">Description</label><EditableText value={item.description} onChange={(v) => updateTimelineItem(index, 'description', v)} className="text-white/70" /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
