import React from 'react';
import EntityList from '@/modules/TimeTracer/entity/_common/components/EntityList';
import {TAG_ENTITY, WORD_ENTITY} from '@/modules/TimeTracer/entity/entityMap';
import {useTranslation} from 'react-i18next';

const WordsList = () => {
    const {t} = useTranslation();

    return <EntityList entityName={WORD_ENTITY} title={t('time_tracing/words')}/>
};

export default WordsList;