import styles from '../styles/Tip.module.css'
import { Tip } from '../type/tip';
import { Code } from '../type/code';
import React, { useState } from 'react';
import codeList from '../../data/code'
import CodeList from './CodeList';

export type TipListProps = {
  tipList: Tip[]
}


export default function TipList(props: TipListProps) {
  const { tipList } = props;
  const [filteredCode, setFilteredCode] = useState<Code[]>([]);

  const handleFilterCodes = (id: number) => {
    const filteredCode = codeList.filter((code) => code.tipId === id);
    setFilteredCode(filteredCode);
  }

  return (
    <div className={styles.page}>
      <div className={styles.tipList}>
        {tipList.map((tip) => (
          <div className={styles.tip} key={tip.id}>
            <button className={styles.button} onClick={() => handleFilterCodes(tip.id)}>
              {tip.title}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.code}>
        <CodeList CodeList={filteredCode} />
      </div>
    </div>
  )
}