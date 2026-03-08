import { AlertCircle, ShieldAlertIcon, ThumbsUpIcon, ZapIcon } from 'lucide-react'
import React from 'react'

const RateLimitedUI = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
        <div className='bg-primary/10 border border-primary/30 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-center p-6'>
                <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                    <ZapIcon className='size-10 text-primary' />
                </div>
                <div className='flex-1 text-center md:text-left'>
                    <h3 className='text-xl font-bold mb-2'> RATE LIMIT REACHED</h3>
                    <div className='mx-auto max-w-1xl p-4 flex items-center justify-start'>
                        <ShieldAlertIcon />
                        <span className='p-3 text-base-content mb-1'> Too many requests in a short while. Try again in a moment!</span>
                    </div>
                    <div className='mx-auto max-w-1xl p-4 flex items-center justify-start'>
                        <ThumbsUpIcon />
                        <span className='p-3 text-sm text-base-content/100'>Dont worry just try again later</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RateLimitedUI
