import { useState, useEffect } from 'react'
import './App.css'
import { katakana } from '../katakana'
import { hiragana } from '../hiragana'
import { ChakraProvider } from '@chakra-ui/react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { motion } from 'framer-motion';
import { LiaGithubAlt } from "react-icons/lia";

function App() {

  const [randomKatakana, setRandomKatakana] = useState({kana: '', roumaji: ''})
  const [randomHiragana, setRandomHiragana] = useState({hiragana: '', roumaji: ''})
  const [hiraganaOrKatakana, setHiraganaOrKatakana] = useState('katakana')
  const [darkMode, setDarkMode] = useState(false)

  const getRandomKatakana = () => {
    setHiraganaOrKatakana('katakana');
    const randomIndex = Math.floor(Math.random() * katakana.length);
    setRandomKatakana(katakana[randomIndex]);
    setRandomHiragana({ hiragana: '', roumaji: '' }); // Reset hiragana state
  }
  
  const getRandomHiragana = () => {
    setHiraganaOrKatakana('hiragana');
    const randomIndex = Math.floor(Math.random() * hiragana.length);
    setRandomHiragana({ hiragana: hiragana[randomIndex].kana, roumaji: hiragana[randomIndex].roumaji });
    setRandomKatakana({ kana: '', roumaji: '' }); // Reset katakana state
  }


  useEffect(() => {
    getRandomKatakana()
  }, [])

  return (
    <ChakraProvider>
    <div className={darkMode ? 'bg-[#1f1f1f] sm:px-10 px-5 pt-5' : 'bg-stone-200 sm:px-10 px-5 pt-5'}>
      <div className='text-green rounded-full p-2 flex justify-between'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
         className={(darkMode ? 'text-stone-200' : 'text-stone-800') + ' font-bold sm:text-xl'}>Japanese 🌸 
        </motion.div>
        <div className='flex'>
        <div>
        <motion.button 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={darkMode ? 'text-stone-200' : 'text-stone-800'} onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </motion.button>
        </div>
        <div>
            <motion.button
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.9 }}
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
            >

              <a href='https://github.com/mahls/japanese'><LiaGithubAlt className={darkMode ? 'text-stone-200 ml-4 relative top-0.5' : 'text-stone-800' + ' ml-4 relative top-0.5'} /></a>
            </motion.button>
        </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-screen mt-20">
        
        <motion.div
          className={'text-4xl mb-5 ' + (darkMode ? 'text-stone-200' : 'text-stone-800')}
          key={[randomKatakana.kana, randomHiragana.hiragana].join()}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          
        >
          {hiraganaOrKatakana === 'katakana' ? randomKatakana.kana : randomHiragana.hiragana}
        </motion.div>
        <motion.div
          className={'text-4xl mb-10 ' + (darkMode ? 'text-stone-200' : 'text-stone-800') }
          key={[randomKatakana.roumaji, randomHiragana.roumaji].join()}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {hiraganaOrKatakana === 'katakana' ? randomKatakana.roumaji : randomHiragana.roumaji}
        </motion.div>
        <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
          className={"border border-stone-700 px-4 py-2 rounded-md mb-2 text-xs " + (darkMode ? 'text-stone-200' : 'text-stone-800')} 
          onClick={getRandomKatakana}>Get Random Katakana
        </motion.button> 
        <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
          className={"border border-stone-700 px-4 py-2 rounded-md mb-2 text-xs " + (darkMode ? 'text-stone-200' : 'text-stone-800')} 
          onClick={getRandomHiragana}>Get Random Hiragana
        </motion.button> 
        </div>
    </div>

    </ChakraProvider>
  )
}

export default App
