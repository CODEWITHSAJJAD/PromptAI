/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { Container } from '@/components/ui/Container';
import { EditableText } from '@/components/editable/EditableText';
import { Plus, Trash2 } from 'lucide-react';

interface HeroData { tagline?: string; title?: string; subtitle?: string; }
interface PromiseData { title?: string; content?: string; }
interface FounderMember { name: string; role: string; bio: string; }
interface FoundersData { title?: string; members: FounderMember[]; }
interface TheDifferenceData { title?: string; items: string[]; }
interface OurPhilosophyData { title?: string; heading?: string; content?: string; }
interface OurWhyData { title?: string; content?: string; }
interface GlobalPartnershipData { tagline?: string; title?: string; description?: string; }

export default function AboutEditor() {
  const { content, updateContent } = useAdmin();
  
  if (!content?.about) return <div className="text-white">Loading content...</div>;

  const aboutContent = content.about as Record<string, unknown>;
  const hero = (aboutContent.hero || {}) as HeroData;
  const promise = (aboutContent.promise || {}) as PromiseData;
  const founders = (aboutContent.founders || { members: [] }) as FoundersData;
  
  const theDifference = (aboutContent.theDifference || { items: [] }) as TheDifferenceData;
  const ourPhilosophy = (aboutContent.ourPhilosophy || {}) as OurPhilosophyData;
  const ourWhy = (aboutContent.ourWhy || {}) as OurWhyData;
  const globalPartnership = (aboutContent.globalPartnership || {}) as GlobalPartnershipData;

  const updateSection = (section: string, field: string, value: any) => {
    const currentSection = (aboutContent[section] || {}) as Record<string, unknown>;
    updateContent('about', { ...aboutContent, [section]: { ...currentSection, [field]: value } });
  };

  const updateMember = (index: number, field: string, value: string) => {
    const members = [...founders.members];
    members[index] = { ...members[index], [field]: value };
    updateContent('about', { ...aboutContent, founders: { ...founders, members } });
  };

  const updateDifferenceItem = (index: number, value: string) => {
    const items = [...theDifference.items];
    items[index] = value;
    updateSection('theDifference', 'items', items);
  };
  const addDifferenceItem = () => {
    const items = [...theDifference.items, "New Item"];
    updateSection('theDifference', 'items', items);
  };
  const deleteDifferenceItem = (index: number) => {
    const items = theDifference.items.filter((_, i) => i !== index);
    updateSection('theDifference', 'items', items);
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">About Page Editor</h1>
        <p className="text-white/60">Click on any text to edit it</p>
      </div>

      <div className="space-y-8 pb-32">
        {/* Existing Sections */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Hero Section</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Tagline</label><EditableText value={hero.tagline || ''} onChange={(v) => updateSection('hero', 'tagline', v)} className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={hero.title || ''} onChange={(v) => updateSection('hero', 'title', v)} className="text-4xl md:text-6xl font-black text-white leading-[0.85] tracking-tighter" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Subtitle</label><EditableText value={hero.subtitle || ''} onChange={(v) => updateSection('hero', 'subtitle', v)} className="text-xl font-bold text-white leading-tight" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Our Promise</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={promise.title || ''} onChange={(v) => updateSection('promise', 'title', v)} className="text-3xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Content</label><EditableText value={promise.content || ''} onChange={(v) => updateSection('promise', 'content', v)} className="text-white/80" /></div>
          </div>
        </section>

        {/* New About Sections */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">The Difference</h2>
            <button onClick={addDifferenceItem} className="flex items-center gap-2 px-3 py-1.5 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 text-sm"><Plus size={16} /> Add Item</button>
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={theDifference.title || ''} onChange={(v) => updateSection('theDifference', 'title', v)} className="text-xl font-bold text-white" /></div>
            <div className="space-y-2">
              <label className="block text-sm text-white/60">Items</label>
              {(theDifference.items || []).map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <EditableText value={item} onChange={(v) => updateDifferenceItem(index, v)} className="flex-1 bg-white/5 p-2 rounded text-white" />
                  <button onClick={() => deleteDifferenceItem(index)} className="text-red-400 p-2 hover:text-red-300"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Our Philosophy & Our Why</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Philosophy Title</label><EditableText value={ourPhilosophy.title || ''} onChange={(v) => updateSection('ourPhilosophy', 'title', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Philosophy Heading</label><EditableText value={ourPhilosophy.heading || ''} onChange={(v) => updateSection('ourPhilosophy', 'heading', v)} className="text-white font-bold" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Philosophy Content</label><EditableText value={ourPhilosophy.content || ''} onChange={(v) => updateSection('ourPhilosophy', 'content', v)} className="text-white/70" /></div>
            
            <div className="pt-4 border-t border-white/10"><label className="block text-sm text-white/60 mb-1">Our Why Title</label><EditableText value={ourWhy.title || ''} onChange={(v) => updateSection('ourWhy', 'title', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Our Why Content</label><EditableText value={ourWhy.content || ''} onChange={(v) => updateSection('ourWhy', 'content', v)} className="text-white/70" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Global Partnership</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Tagline</label><EditableText value={globalPartnership.tagline || ''} onChange={(v) => updateSection('globalPartnership', 'tagline', v)} className="text-[#FF3500] font-black uppercase tracking-widest text-xs" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Title</label><EditableText value={globalPartnership.title || ''} onChange={(v) => updateSection('globalPartnership', 'title', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Description</label><EditableText value={globalPartnership.description || ''} onChange={(v) => updateSection('globalPartnership', 'description', v)} className="text-white/80" /></div>
          </div>
        </section>

        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Team Members</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Section Title</label><EditableText value={founders.title || ''} onChange={(v) => updateContent('about', { ...aboutContent, founders: { ...founders, title: v } })} className="text-3xl font-bold text-white" /></div>
            {founders.members.map((member, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Team Member {index + 1}</h3>
                <div className="space-y-2">
                  <div><label className="block text-xs text-white/60">Name</label><EditableText value={member.name} onChange={(v) => updateMember(index, 'name', v)} className="text-white font-bold" /></div>
                  <div><label className="block text-xs text-white/60">Role</label><EditableText value={member.role} onChange={(v) => updateMember(index, 'role', v)} className="text-white/80" /></div>
                  <div><label className="block text-xs text-white/60">Bio</label><EditableText value={member.bio} onChange={(v) => updateMember(index, 'bio', v)} className="text-white/70" /></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
