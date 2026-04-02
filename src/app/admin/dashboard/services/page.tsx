/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useAdmin } from '@/app/admin/context/AdminContext';
import { Container } from '@/components/ui/Container';
import { EditableText } from '@/components/editable/EditableText';
import { Plus, Trash2 } from 'lucide-react';

interface HeroData {
  tagline?: string;
  title?: string;
  subtitle?: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  tag?: string;
}

interface AdoptionData {
  journeyTitle?: string;
  journeyContent?: string;
  title?: string;
  content?: string;
  trainingTitle?: string;
  trainingSubtitle?: string;
  trainingContent?: string;
  workshopTitle?: string;
  workshopSubtitle?: string;
  features?: string[];
}

interface FounderMember {
  name: string;
  role: string;
  bio: string;
}

interface FoundersData {
  title?: string;
  members: FounderMember[];
}

export default function ServicesEditor() {
  const { content, updateContent } = useAdmin();

  if (!content?.services) {
    return <div className="text-white">Loading content...</div>;
  }

  const servicesContent = content.services as Record<string, unknown>;
  const hero = (servicesContent.hero || {}) as HeroData;
  const detailCards = (servicesContent.detailCards || { items: [] }) as { items: ServiceItem[] };
  const adoption = (servicesContent.adoptionDeepDive || {}) as AdoptionData;
  const founders = (servicesContent.founders || { members: [] }) as FoundersData;

  const updateHero = (field: string, value: string) => {
    updateContent('services', { ...servicesContent, hero: { ...hero, [field]: value } });
  };

  const updateAdoption = (field: string, value: any) => {
    updateContent('services', { ...servicesContent, adoptionDeepDive: { ...adoption, [field]: value } });
  };
  const updateAdoptionFeature = (index: number, value: string) => {
    const features = [...(adoption.features || [])];
    features[index] = value;
    updateAdoption('features', features);
  };
  const addAdoptionFeature = () => {
    const features = [...(adoption.features || []), "New Feature"];
    updateAdoption('features', features);
  };
  const deleteAdoptionFeature = (index: number) => {
    const features = (adoption.features || []).filter((_, i) => i !== index);
    updateAdoption('features', features);
  };

  const updateService = (index: number, field: string, value: string) => {
    const items = [...detailCards.items];
    items[index] = { ...items[index], [field]: value };
    updateContent('services', { ...servicesContent, detailCards: { items } });
  };

  const addService = () => {
    const newService: ServiceItem = {
      id: Date.now().toString(),
      title: 'New Service',
      description: 'Service description goes here...',
      icon: 'star',
      tag: 'New'
    };
    updateContent('services', { ...servicesContent, detailCards: { items: [...detailCards.items, newService] } });
  };

  const deleteService = (index: number) => {
    const items = detailCards.items.filter((_, i) => i !== index);
    updateContent('services', { ...servicesContent, detailCards: { items } });
  };

  const updateMember = (index: number, field: string, value: string) => {
    const members = [...founders.members];
    members[index] = { ...members[index], [field]: value };
    updateContent('services', { ...servicesContent, founders: { ...founders, members } });
  };

  const addMember = () => {
    const newMember: FounderMember = {
      name: 'New Team Member',
      role: 'Role',
      bio: 'Bio description...'
    };
    updateContent('services', { ...servicesContent, founders: { ...founders, members: [...founders.members, newMember] } });
  };

  const deleteMember = (index: number) => {
    const members = founders.members.filter((_, i) => i !== index);
    updateContent('services', { ...servicesContent, founders: { ...founders, members } });
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Services Page Editor</h1>
        <p className="text-white/60">Click on any text to edit it. Add or remove services below.</p>
      </div>

      <div className="space-y-8">
        {/* Hero Section */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Hero Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Tagline</label>
              <EditableText
                value={hero.tagline || ''}
                onChange={(v) => updateHero('tagline', v)}
                tagName="p"
                className="text-[#FF3500] text-sm font-black uppercase tracking-[0.3em] font-mono"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Title</label>
              <EditableText
                value={hero.title || ''}
                onChange={(v) => updateHero('title', v)}
                tagName="h1"
                className="text-5xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Subtitle</label>
              <EditableText
                value={hero.subtitle || ''}
                onChange={(v) => updateHero('subtitle', v)}
                tagName="p"
                className="text-xl md:text-2xl font-bold text-white leading-tight"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Services</h2>
            <button
              onClick={addService}
              className="flex items-center gap-2 px-4 py-2 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 transition-colors"
            >
              <Plus size={18} />
              Add Service
            </button>
          </div>

          <div className="space-y-4">
            {detailCards.items.map((item, index) => (
              <div key={item.id || index} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">Service {index + 1}</h3>
                  <button
                    onClick={() => deleteService(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-white/60">Title</label>
                    <EditableText
                      value={item.title}
                      onChange={(v) => updateService(index, 'title', v)}
                      className="text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60">Description</label>
                    <EditableText
                      value={item.description}
                      onChange={(v) => updateService(index, 'description', v)}
                      className="text-white/70"
                    />
                  </div>
                </div>
              </div>
            ))}

            {detailCards.items.length === 0 && (
              <p className="text-center text-white/40 py-8">
                No services yet. Click &quot;Add Service&quot; to create one.
              </p>
            )}
          </div>
        </section>

        {/* Adoption Deep Dive */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Adoption Deep Dive</h2>
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Journey Title</label><EditableText value={adoption.journeyTitle || ''} onChange={(v) => updateAdoption('journeyTitle', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Journey Content</label><EditableText value={adoption.journeyContent || ''} onChange={(v) => updateAdoption('journeyContent', v)} className="text-white/80" /></div>

            <div className="pt-4 border-t border-white/10"><label className="block text-sm text-white/60 mb-1">Section Title</label><EditableText value={adoption.title || ''} onChange={(v) => updateAdoption('title', v)} className="text-2xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Section Content</label><EditableText value={adoption.content || ''} onChange={(v) => updateAdoption('content', v)} className="text-white/80" /></div>

            <div className="pt-4 border-t border-white/10"><label className="block text-sm text-white/60 mb-1">Training Title</label><EditableText value={adoption.trainingTitle || ''} onChange={(v) => updateAdoption('trainingTitle', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Training Subtitle</label><EditableText value={adoption.trainingSubtitle || ''} onChange={(v) => updateAdoption('trainingSubtitle', v)} className="text-white/80" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Training Content</label><EditableText value={adoption.trainingContent || ''} onChange={(v) => updateAdoption('trainingContent', v)} className="text-white/70" /></div>

            <div className="pt-4 border-t border-white/10"><label className="block text-sm text-white/60 mb-1">Workshop Title</label><EditableText value={adoption.workshopTitle || ''} onChange={(v) => updateAdoption('workshopTitle', v)} className="text-xl font-bold text-white" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Workshop Subtitle</label><EditableText value={adoption.workshopSubtitle || ''} onChange={(v) => updateAdoption('workshopSubtitle', v)} className="text-white/80" /></div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm text-white/60">Features ({adoption.features?.length || 0})</label>
                <button onClick={addAdoptionFeature} className="text-xs bg-[#FF3500] text-white px-2 py-1 rounded">Add Feature</button>
              </div>
              <div className="space-y-2">
                {(adoption.features || []).map((feat, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <EditableText value={feat} onChange={(v) => updateAdoptionFeature(index, v)} className="flex-1 bg-white/5 p-2 rounded text-white" />
                    <button onClick={() => deleteAdoptionFeature(index)} className="text-red-400 p-2"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-[#262424] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Team Members</h2>
            <button
              onClick={addMember}
              className="flex items-center gap-2 px-4 py-2 bg-[#FF3500] text-white rounded-lg hover:bg-[#FF3500]/90 transition-colors"
            >
              <Plus size={18} />
              Add Member
            </button>
          </div>

          <div className="space-y-4">
            {founders.members.map((member, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">Member {index + 1}</h3>
                  <button
                    onClick={() => deleteMember(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-white/60">Name</label>
                    <EditableText
                      value={member.name}
                      onChange={(v) => updateMember(index, 'name', v)}
                      className="text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60">Role</label>
                    <EditableText
                      value={member.role}
                      onChange={(v) => updateMember(index, 'role', v)}
                      className="text-white/80"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60">Bio</label>
                    <EditableText
                      value={member.bio}
                      onChange={(v) => updateMember(index, 'bio', v)}
                      className="text-white/70"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
