"use client";
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FromSection';
import OutputSection from '../_components/OutputSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'; // Replace with the correct path


interface PROPS {
  params: {
    'template-slug': string;
  };
}

const CreateNewContent: React.FC<PROPS> = (props) => {
  // Retrieve the selected template based on the slug from props
  const selectedTemplate = Templates?.find((item) => item.slug === props.params['template-slug']);
  const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');

  const GenerateAIContent=async(formData:any)=>{
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;
        const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
        const result=await chatSession.sendMessage(FinalAIPrompt);
        
        console.log(result.response.text());
        setAiOutput(result?.response.text())
        setLoading(false);
  }
    
       

  return (
    <div>
      <Link href={"/dashboard"}>
            <Button> <ArrowLeft/> Back</Button>
        </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* Form Section */}
        <FormSection 
                selectedTemplate={selectedTemplate}
                userFormInput={(v:any)=>GenerateAIContent(v)}
                loading={loading} />
        <div className='col-span-2'>
          {/* Output Section */}
        <OutputSection aiOutput={aiOutput} />
        </div>
        
      </div>
    </div>
  );
};

export default CreateNewContent;
