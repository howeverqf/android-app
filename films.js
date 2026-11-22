    const FILM_STOCKS = [
      // --- KODAK (14) ---
      {
        id: 'portra_400', brand: 'Kodak', name: 'Portra 400', iso: '400', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#EAB308', accentColor: '#DC2626', textColor: '#18181B', capColor: '#27272A',
        desc: 'Эталонная портретная пленка с мягкими телесными тонами и широкой фотоширотой.',
        grade: { exposure: 0.08, contrast: -6, sat: -4, temp: 7, tint: 3, fade: 5, shadows: 12, highlights: -10, grain: 16, halation: 0, rMul: 1.03, gMul: 1.00, bMul: 0.95, shadowTint: [8, 4, -4], highTint: [6, 3, -2] }
      },
      {
        id: 'portra_160', brand: 'Kodak', name: 'Portra 160', iso: '160', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#FDE047', accentColor: '#B91C1C', textColor: '#18181B', capColor: '#27272A',
        desc: 'Ультрамелкое зерно, деликатные пастельные оттенки и натуральная передача кожи.',
        grade: { exposure: 0.05, contrast: -8, sat: -8, temp: 5, tint: 2, fade: 4, shadows: 10, highlights: -8, grain: 10, halation: 0, rMul: 1.02, gMul: 1.00, bMul: 0.97, shadowTint: [5, 3, -2], highTint: [4, 2, -2] }
      },
      {
        id: 'portra_800', brand: 'Kodak', name: 'Portra 800', iso: '800', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#D97706', accentColor: '#991B1B', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Насыщенные цвета, выразительное зерно и теплые золотистые света в сумерках.',
        grade: { exposure: 0.1, contrast: 4, sat: 10, temp: 11, tint: 4, fade: 6, shadows: 14, highlights: -6, grain: 26, halation: 6, rMul: 1.05, gMul: 1.00, bMul: 0.92, shadowTint: [10, 4, -6], highTint: [8, 3, -4] }
      },
      {
        id: 'gold_200', brand: 'Kodak', name: 'Gold 200', iso: '200', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#F59E0B', accentColor: '#78350F', textColor: '#18181B', capColor: '#18181B',
        desc: 'Классическая теплая любительская пленка с янтарным солнечным оттенком.',
        grade: { exposure: 0.05, contrast: 6, sat: 12, temp: 16, tint: 2, fade: 4, shadows: 4, highlights: -4, grain: 20, halation: 0, rMul: 1.06, gMul: 1.01, bMul: 0.89, shadowTint: [12, 6, -8], highTint: [10, 5, -6] }
      },
      {
        id: 'colorplus_200', brand: 'Kodak', name: 'ColorPlus 200', iso: '200', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#FBBF24', accentColor: '#DC2626', textColor: '#7F1D1D', capColor: '#27272A',
        desc: 'Винтажная эмульсия 80-х с теплыми желто-красными тонами и характерным зерном.',
        grade: { exposure: 0.02, contrast: 8, sat: 8, temp: 14, tint: -2, fade: 7, shadows: 2, highlights: -5, grain: 24, halation: 0, rMul: 1.05, gMul: 1.02, bMul: 0.90, shadowTint: [10, 8, -6], highTint: [8, 4, -5] }
      },
      {
        id: 'ultramax_400', brand: 'Kodak', name: 'UltraMax 400', iso: '400', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#2563EB', accentColor: '#FACC15', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Яркие синие и желтые тона, живой контраст для уличной репортажной съемки.',
        grade: { exposure: 0.04, contrast: 10, sat: 16, temp: 4, tint: -3, fade: 3, shadows: 5, highlights: -5, grain: 25, halation: 0, rMul: 1.02, gMul: 1.00, bMul: 1.03, shadowTint: [-4, 2, 10], highTint: [8, 6, -4] }
      },
      {
        id: 'ektar_100', brand: 'Kodak', name: 'Ektar 100', iso: '100', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#DC2626', accentColor: '#FACC15', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Ультрамелкое зерно среди цветных негативов и высокая микроконтрастная насыщенность.',
        grade: { exposure: 0.0, contrast: 14, sat: 24, temp: 6, tint: 4, fade: 0, shadows: -4, highlights: -6, grain: 8, halation: 0, rMul: 1.06, gMul: 0.99, bMul: 0.96, shadowTint: [4, -2, 6], highTint: [6, 2, -3] }
      },
      {
        id: 'ektachrome_e100', brand: 'Kodak', name: 'Ektachrome E100', iso: '100', type: 'E-6 Слайд', isBW: false,
        bodyColor: '#1D4ED8', accentColor: '#EF4444', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Профессиональный слайд с кристально чистыми белыми тонами и прохладной точностью.',
        grade: { exposure: 0.02, contrast: 16, sat: 14, temp: -6, tint: 3, fade: 0, shadows: -8, highlights: 4, grain: 10, halation: 0, rMul: 0.98, gMul: 1.00, bMul: 1.05, shadowTint: [-6, -2, 10], highTint: [2, 2, 4] }
      },
      {
        id: 'vision3_500t', brand: 'Kodak', name: 'Vision3 500T', iso: '500', type: 'ECN-2 Кинопленка', isBW: false,
        bodyColor: '#374151', accentColor: '#F59E0B', textColor: '#FBBF24', capColor: '#111827',
        desc: 'Голливудская кинопленка для ночного освещения с глубокими сине-зелеными тенями.',
        grade: { exposure: 0.05, contrast: 4, sat: 6, temp: -16, tint: -5, fade: 8, shadows: 14, highlights: -12, grain: 22, halation: 12, rMul: 0.94, gMul: 1.01, bMul: 1.08, shadowTint: [-10, 6, 14], highTint: [6, 3, -4] }
      },
      {
        id: 'vision3_250d', brand: 'Kodak', name: 'Vision3 250D', iso: '250', type: 'ECN-2 Кинопленка', isBW: false,
        bodyColor: '#4B5563', accentColor: '#38BDF8', textColor: '#FFFFFF', capColor: '#111827',
        desc: 'Дневная кинопленка с мягким киношным ролл-оффом в светах и богатыми тенями.',
        grade: { exposure: 0.06, contrast: 2, sat: 8, temp: 5, tint: -2, fade: 7, shadows: 15, highlights: -14, grain: 17, halation: 5, rMul: 1.02, gMul: 1.01, bMul: 0.97, shadowTint: [-4, 5, 6], highTint: [6, 4, -3] }
      },
      {
        id: 'vision3_50d', brand: 'Kodak', name: 'Vision3 50D', iso: '50', type: 'ECN-2 Кинопленка', isBW: false,
        bodyColor: '#52525B', accentColor: '#FACC15', textColor: '#FFFFFF', capColor: '#09090B',
        desc: 'Низкочувствительная дневная кинопленка с чистейшими полутонами и мягким контрастом.',
        grade: { exposure: 0.04, contrast: 4, sat: 10, temp: 4, tint: -1, fade: 5, shadows: 10, highlights: -12, grain: 9, halation: 2, rMul: 1.02, gMul: 1.00, bMul: 0.98, shadowTint: [-2, 3, 4], highTint: [5, 3, -2] }
      },
      {
        id: 'trix_400', brand: 'Kodak', name: 'Tri-X 400', iso: '400', type: 'Ч/Б Негатив', isBW: true,
        bodyColor: '#18181B', accentColor: '#FACC15', textColor: '#FACC15', capColor: '#09090B',
        desc: 'Легендарная репортажная ч/б пленка с драматическим контрастом и классическим зерном.',
        grade: { bw: true, bwWeights: [0.34, 0.56, 0.10], exposure: 0.05, contrast: 22, sat: -100, temp: 0, tint: 0, fade: 4, shadows: -6, highlights: 8, grain: 28, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [0, 0, 0], highTint: [2, 2, 0] }
      },
      {
        id: 'tmax_400', brand: 'Kodak', name: 'T-Max 400', iso: '400', type: 'Ч/Б Табулярная', isBW: true,
        bodyColor: '#27272A', accentColor: '#EAB308', textColor: '#FFFFFF', capColor: '#09090B',
        desc: 'Современная мелкозернистая ч/б эмульсия с высокой резкостью и чистыми серыми тонами.',
        grade: { bw: true, bwWeights: [0.30, 0.59, 0.11], exposure: 0.04, contrast: 18, sat: -100, temp: 0, tint: 0, fade: 2, shadows: -2, highlights: 5, grain: 15, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [0, 0, 1], highTint: [1, 1, 1] }
      },
      {
        id: 'aerochrome', brand: 'Kodak', name: 'Aerochrome IR', iso: '400', type: 'Инфракрасная', isBW: false,
        bodyColor: '#BE185D', accentColor: '#FACC15', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Редкая инфракрасная пленка, сдвигающая зеленый спектр в насыщенный малиново-красный.',
        grade: { aerochrome: true, exposure: 0.05, contrast: 12, sat: 28, temp: 4, tint: 18, fade: 2, shadows: 4, highlights: -4, grain: 22, halation: 14, rMul: 1.15, gMul: 0.85, bMul: 1.05, shadowTint: [8, -6, 10], highTint: [16, -8, 8] }
      },

      // --- FUJIFILM (10) ---
      {
        id: 'superia_400', brand: 'Fujifilm', name: 'Superia X-TRA 400', iso: '400', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#16A34A', accentColor: '#EF4444', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Фирменные изумрудно-зеленые тени Fuji и сочные пурпурно-красные акценты.',
        grade: { exposure: 0.04, contrast: 8, sat: 12, temp: -4, tint: -9, fade: 5, shadows: 8, highlights: -6, grain: 23, halation: 0, rMul: 1.00, gMul: 1.04, bMul: 1.01, shadowTint: [-8, 10, 4], highTint: [5, 0, 4] }
      },
      {
        id: 'fuji_c200', brand: 'Fujifilm', name: 'Fujicolor C200', iso: '200', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#22C55E', accentColor: '#FFFFFF', textColor: '#052E16', capColor: '#18181B',
        desc: 'Чистые, воздушные дневные цвета с легкой прохладой в тенях и мягким контрастом.',
        grade: { exposure: 0.06, contrast: 2, sat: 6, temp: -3, tint: -6, fade: 4, shadows: 10, highlights: -6, grain: 17, halation: 0, rMul: 0.99, gMul: 1.03, bMul: 1.00, shadowTint: [-6, 8, 3], highTint: [4, 2, 0] }
      },
      {
        id: 'pro_400h', brand: 'Fujifilm', name: 'Pro 400H', iso: '400', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#0D9488', accentColor: '#CCFBF1', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Культовая портретная пленка с воздушными мятными оттенками и нежными светами.',
        grade: { exposure: 0.12, contrast: -8, sat: -6, temp: -6, tint: -8, fade: 7, shadows: 16, highlights: -14, grain: 15, halation: 0, rMul: 0.97, gMul: 1.03, bMul: 1.02, shadowTint: [-6, 9, 6], highTint: [2, 4, 2] }
      },
      {
        id: 'velvia_50', brand: 'Fujifilm', name: 'Velvia 50', iso: '50', type: 'E-6 Слайд', isBW: false,
        bodyColor: '#15803D', accentColor: '#E11D48', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Легендарный слайд с глубокими черными тенями и предельной цветовой плотностью.',
        grade: { exposure: -0.02, contrast: 22, sat: 32, temp: 2, tint: 8, fade: 0, shadows: -12, highlights: 4, grain: 8, halation: 0, rMul: 1.05, gMul: 1.01, bMul: 1.04, shadowTint: [4, -4, 8], highTint: [8, -2, 6] }
      },
      {
        id: 'provia_100f', brand: 'Fujifilm', name: 'Provia 100F', iso: '100', type: 'E-6 Слайд', isBW: false,
        bodyColor: '#0284C7', accentColor: '#22C55E', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Нейтральный, кристально точный слайд с превосходной передачей полутонов.',
        grade: { exposure: 0.02, contrast: 12, sat: 10, temp: -4, tint: -2, fade: 0, shadows: -4, highlights: 2, grain: 9, halation: 0, rMul: 0.99, gMul: 1.01, bMul: 1.03, shadowTint: [-4, 2, 6], highTint: [0, 1, 2] }
      },
      {
        id: 'astia_100f', brand: 'Fujifilm', name: 'Astia 100F', iso: '100', type: 'E-6 Портретный', isBW: false,
        bodyColor: '#0EA5E9', accentColor: '#F472B6', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Мягкий портретный слайд с деликатным контрастом и благородными теплыми полутонами.',
        grade: { exposure: 0.04, contrast: 4, sat: 4, temp: 2, tint: 2, fade: 2, shadows: 4, highlights: -4, grain: 9, halation: 0, rMul: 1.01, gMul: 1.00, bMul: 0.99, shadowTint: [2, 2, 2], highTint: [4, 2, 0] }
      },
      {
        id: 'classic_chrome', brand: 'Fujifilm', name: 'Classic Chrome', iso: '400', type: 'Документальная', isBW: false,
        bodyColor: '#334155', accentColor: '#38BDF8', textColor: '#F8FAFC', capColor: '#0F172A',
        desc: 'Журнальная эстетика с приглушенной насыщенностью, глубокими тенями и холодным контрастом.',
        grade: { exposure: 0.0, contrast: 14, sat: -22, temp: -5, tint: -4, fade: 6, shadows: -6, highlights: -8, grain: 16, halation: 0, rMul: 0.98, gMul: 1.00, bMul: 1.02, shadowTint: [-6, 3, 6], highTint: [4, 2, -2] }
      },
      {
        id: 'classic_neg', brand: 'Fujifilm', name: 'Classic Neg', iso: '400', type: 'C-41 Цветная', isBW: false,
        bodyColor: '#065F46', accentColor: '#F97316', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Жесткий уличный контраст с винтажными янтарными светами и бирюзовыми тенями.',
        grade: { exposure: 0.02, contrast: 18, sat: -6, temp: 4, tint: -6, fade: 5, shadows: -4, highlights: -6, grain: 20, halation: 0, rMul: 1.03, gMul: 1.01, bMul: 0.98, shadowTint: [-10, 8, 8], highTint: [10, 4, -6] }
      },
      {
        id: 'eterna_250d', brand: 'Fujifilm', name: 'Eterna Cinema', iso: '250', type: 'Кинопленка', isBW: false,
        bodyColor: '#1E293B', accentColor: '#10B981', textColor: '#A7F3D0', capColor: '#09090B',
        desc: 'Мягкая японская кинопленка с низким контрастом и деликатной цветопередачей.',
        grade: { exposure: 0.04, contrast: -12, sat: -18, temp: -3, tint: -5, fade: 11, shadows: 18, highlights: -14, grain: 14, halation: 0, rMul: 0.98, gMul: 1.02, bMul: 1.01, shadowTint: [-4, 6, 5], highTint: [2, 2, 0] }
      },
      {
        id: 'acros_100', brand: 'Fujifilm', name: 'Acros 100 II', iso: '100', type: 'Ч/Б Ортопанхром', isBW: true,
        bodyColor: '#27272A', accentColor: '#22C55E', textColor: '#FFFFFF', capColor: '#09090B',
        desc: 'Ультрагладкая ч/б пленка с богатыми полутонами и глубокими бархатными тенями.',
        grade: { bw: true, bwWeights: [0.28, 0.58, 0.14], exposure: 0.03, contrast: 16, sat: -100, temp: 0, tint: 0, fade: 2, shadows: -4, highlights: 4, grain: 10, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [-1, 0, 2], highTint: [1, 1, 1] }
      },

      // --- CINESTILL (4) ---
      {
        id: 'cinestill_800t', brand: 'CineStill', name: 'CineStill 800T', iso: '800', type: 'Вольфрам + Ореол', isBW: false,
        bodyColor: '#0F172A', accentColor: '#EF4444', textColor: '#38BDF8', capColor: '#000000',
        desc: 'Культовая ночная пленка без сажевого слоя с фирменным красным ореолом вокруг огней.',
        grade: { exposure: 0.06, contrast: 8, sat: 10, temp: -22, tint: -4, fade: 6, shadows: 12, highlights: -8, grain: 24, halation: 58, rMul: 0.94, gMul: 1.01, bMul: 1.12, shadowTint: [-12, 6, 16], highTint: [12, -2, -4] }
      },
      {
        id: 'cinestill_50d', brand: 'CineStill', name: 'CineStill 50D', iso: '50', type: 'Дневная + Ореол', isBW: false,
        bodyColor: '#FEF3C7', accentColor: '#DC2626', textColor: '#991B1B', capColor: '#18181B',
        desc: 'Дневная кинопленка с шелковистыми цветами и тонким красным свечением в бликах.',
        grade: { exposure: 0.06, contrast: 4, sat: 10, temp: 8, tint: 2, fade: 5, shadows: 10, highlights: -10, grain: 10, halation: 28, rMul: 1.04, gMul: 1.00, bMul: 0.95, shadowTint: [4, 4, -2], highTint: [8, 2, -4] }
      },
      {
        id: 'cinestill_400d', brand: 'CineStill', name: 'CineStill 400D', iso: '400', type: 'Универсал + Ореол', isBW: false,
        bodyColor: '#EA580C', accentColor: '#FEF08A', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Универсальная динамическая пленка с теплыми цветами и мягким красным гало.',
        grade: { exposure: 0.05, contrast: 5, sat: 12, temp: 9, tint: 3, fade: 5, shadows: 12, highlights: -10, grain: 18, halation: 34, rMul: 1.04, gMul: 1.01, bMul: 0.94, shadowTint: [6, 3, -3], highTint: [10, 2, -4] }
      },
      {
        id: 'cinestill_bwxx', brand: 'CineStill', name: 'Double-X BwXX', iso: '250', type: 'Ч/Б Кинопленка', isBW: true,
        bodyColor: '#18181B', accentColor: '#EF4444', textColor: '#FFFFFF', capColor: '#000000',
        desc: 'Классическая голливудская ч/б кинопленка 1959 года с серебристым блеском.',
        grade: { bw: true, bwWeights: [0.32, 0.56, 0.12], exposure: 0.04, contrast: 18, sat: -100, temp: 0, tint: 0, fade: 5, shadows: 2, highlights: 4, grain: 24, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [0, 0, 1], highTint: [2, 2, 0] }
      },

      // --- ILFORD (4) ---
      {
        id: 'ilford_hp5', brand: 'Ilford', name: 'HP5 Plus 400', iso: '400', type: 'Ч/Б Классика', isBW: true,
        bodyColor: '#18181B', accentColor: '#FFFFFF', textColor: '#FFFFFF', capColor: '#09090B',
        desc: 'Универсальная британская ч/б пленка с мягкой тональной шкалой и живым зерном.',
        grade: { bw: true, bwWeights: [0.30, 0.59, 0.11], exposure: 0.04, contrast: 10, sat: -100, temp: 0, tint: 0, fade: 6, shadows: 8, highlights: -4, grain: 24, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [1, 1, 0], highTint: [2, 1, 0] }
      },
      {
        id: 'ilford_delta_3200', brand: 'Ilford', name: 'Delta 3200', iso: '3200', type: 'Ч/Б Ночная', isBW: true,
        bodyColor: '#09090B', accentColor: '#A1A1AA', textColor: '#E4E4E7', capColor: '#000000',
        desc: 'Крупное выразительное зерно и высокая светочувствительность для атмосферных ночных кадров.',
        grade: { bw: true, bwWeights: [0.33, 0.55, 0.12], exposure: 0.12, contrast: 14, sat: -100, temp: 0, tint: 0, fade: 9, shadows: 12, highlights: -2, grain: 48, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [2, 1, 0], highTint: [2, 2, 1] }
      },
      {
        id: 'ilford_fp4', brand: 'Ilford', name: 'FP4 Plus 125', iso: '125', type: 'Ч/Б Студийная', isBW: true,
        bodyColor: '#3F3F46', accentColor: '#E4E4E7', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Высокая резкость, мелкое зерно и благородные переходы серого для портретов.',
        grade: { bw: true, bwWeights: [0.29, 0.60, 0.11], exposure: 0.02, contrast: 14, sat: -100, temp: 0, tint: 0, fade: 2, shadows: 2, highlights: 2, grain: 12, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [0, 0, 0], highTint: [1, 1, 1] }
      },
      {
        id: 'ilford_xp2', brand: 'Ilford', name: 'XP2 Super 400', iso: '400', type: 'Ч/Б C-41', isBW: true,
        bodyColor: '#52525B', accentColor: '#F472B6', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Хромогенная ч/б пленка с почти невидимым зерном и мягкими светами.',
        grade: { bw: true, bwWeights: [0.31, 0.58, 0.11], exposure: 0.06, contrast: 6, sat: -100, temp: 0, tint: 0, fade: 5, shadows: 10, highlights: -8, grain: 11, halation: 0, rMul: 1, gMul: 1, bMul: 1, shadowTint: [2, 0, 2], highTint: [3, 2, 0] }
      },

      // --- AGFA / LOMOGRAPHY / POLAROID (3) ---
      {
        id: 'agfa_vista_400', brand: 'Agfa', name: 'Vista Plus 400', iso: '400', type: 'C-41 Ретро', isBW: false,
        bodyColor: '#DC2626', accentColor: '#FFFFFF', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Сочные красные и чистые холодные тона культовой европейской пленки 2000-х.',
        grade: { exposure: 0.04, contrast: 12, sat: 16, temp: -2, tint: 6, fade: 4, shadows: 4, highlights: -4, grain: 22, halation: 0, rMul: 1.06, gMul: 0.99, bMul: 1.02, shadowTint: [-4, 2, 8], highTint: [8, 2, 2] }
      },
      {
        id: 'lomo_800', brand: 'Lomography', name: 'Color Negative 800', iso: '800', type: 'C-41 Насыщенная', isBW: false,
        bodyColor: '#7C3AED', accentColor: '#FACC15', textColor: '#FFFFFF', capColor: '#18181B',
        desc: 'Плотные сочные цвета, теплые золотые блики и контрастный уличный характер.',
        grade: { exposure: 0.08, contrast: 14, sat: 24, temp: 10, tint: 5, fade: 4, shadows: 8, highlights: -6, grain: 28, halation: 10, rMul: 1.06, gMul: 1.01, bMul: 0.94, shadowTint: [6, 2, 8], highTint: [10, 5, -4] }
      },
      {
        id: 'polaroid_sx70', brand: 'Polaroid', name: 'SX-70 Instant', iso: '160', type: 'Моментальная', isBW: false,
        bodyColor: '#F4F4F5', accentColor: '#EC4899', textColor: '#18181B', capColor: '#27272A',
        desc: 'Винтажная моментальная карточка с кремовыми светами, бирюзовыми тенями и мягкостью.',
        grade: { exposure: 0.08, contrast: -6, sat: -10, temp: 12, tint: -6, fade: 14, shadows: 16, highlights: -12, grain: 20, halation: 8, rMul: 1.04, gMul: 1.02, bMul: 0.92, shadowTint: [-8, 10, 8], highTint: [12, 8, -6] }
      }
      ,
      { id: 'odak_ro_mage_100', brand: 'Kodak', name: 'Pro Image 100', iso: '100', type: 'Цветная', isBW: false,
        bodyColor: '#e8b83b', accentColor: '#b32823', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Тёплая портретная палитра с мягкими светами.',
        grade: { exposure: 0.03, contrast: 6, sat: 8, temp: 5, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 14, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'odak_erocolor', brand: 'Kodak', name: 'Aerocolor IV', iso: '125', type: 'Цветная', isBW: false,
        bodyColor: '#bf3b30', accentColor: '#efc04b', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Чистые воздушные оттенки и прохладные тени.',
        grade: { exposure: 0.03, contrast: 9, sat: 4, temp: -5, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 10, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'odak_ision3_200', brand: 'Kodak', name: 'Vision3 200T', iso: '200', type: 'Цветная', isBW: false,
        bodyColor: '#343b53', accentColor: '#ef9d46', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Кинематографичные синие тени и янтарные огни.',
        grade: { exposure: 0.03, contrast: 5, sat: 5, temp: -15, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 20, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'ujifilm_eala_100', brand: 'Fujifilm', name: 'Reala 100', iso: '100', type: 'Цветная', isBW: false,
        bodyColor: '#12876c', accentColor: '#e6e8b7', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Натуральная зелень и деликатные оттенки кожи.',
        grade: { exposure: 0.03, contrast: 2, sat: 7, temp: -3, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 11, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'ujifilm_uperia_remium_400', brand: 'Fujifilm', name: 'Superia Premium 400', iso: '400', type: 'Цветная', isBW: false,
        bodyColor: '#127a47', accentColor: '#e6cc57', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Плотная зелень и яркие городские акценты.',
        grade: { exposure: 0.03, contrast: 11, sat: 12, temp: -4, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 22, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'ujifilm_atura_1600', brand: 'Fujifilm', name: 'Natura 1600', iso: '1600', type: 'Цветная', isBW: false,
        bodyColor: '#1c6671', accentColor: '#efb77d', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Ночной репортаж с выраженным зерном.',
        grade: { exposure: 0.03, contrast: 8, sat: 4, temp: -10, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 36, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'omography_omo_hrome_urple', brand: 'Lomography', name: 'LomoChrome Purple', iso: '400', type: 'Цветная', isBW: false,
        bodyColor: '#6d42ad', accentColor: '#f1a1d7', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Экспериментальные фиолетовые и розовые тона.',
        grade: { exposure: 0.03, contrast: 14, sat: 25, temp: -5, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 24, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'omography_omo_hrome_etropolis', brand: 'Lomography', name: 'LomoChrome Metropolis', iso: '400', type: 'Цветная', isBW: false,
        bodyColor: '#505d5b', accentColor: '#d6b78c', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Приглушённые цвета и индустриальный контраст.',
        grade: { exposure: 0.03, contrast: 19, sat: -25, temp: -4, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 25, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'omography_edscale', brand: 'Lomography', name: 'Redscale XR', iso: '200', type: 'Цветная', isBW: false,
        bodyColor: '#b9442e', accentColor: '#efaa4b', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Красно-оранжевый винтажный цветовой сдвиг.',
        grade: { exposure: 0.03, contrast: 14, sat: 4, temp: 30, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 29, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'lford_elta_3200', brand: 'Ilford', name: 'Delta 3200', iso: '3200', type: 'Ч/Б', isBW: true,
        bodyColor: '#292929', accentColor: '#d4d4d4', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Контрастный чёрно-белый ночной репортаж.',
        grade: { bw: true, bwWeights: [0.30, 0.59, 0.11], exposure: 0.03, contrast: 25, sat: -100, temp: 0, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 48, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'lford_200', brand: 'Ilford', name: 'SFX 200', iso: '200', type: 'Ч/Б', isBW: true,
        bodyColor: '#353535', accentColor: '#d9d9d9', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Драматичная чёрно-белая тональность.',
        grade: { bw: true, bwWeights: [0.30, 0.59, 0.11], exposure: 0.03, contrast: 22, sat: -100, temp: 0, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 27, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'ollei_etro_80', brand: 'Rollei', name: 'Retro 80S', iso: '80', type: 'Ч/Б', isBW: true,
        bodyColor: '#3a4148', accentColor: '#f4d5a0', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Чёткая графичная чёрно-белая эстетика.',
        grade: { bw: true, bwWeights: [0.30, 0.59, 0.11], exposure: 0.03, contrast: 23, sat: -100, temp: 0, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 12, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'ollei_nfrared_400', brand: 'Rollei', name: 'Infrared 400', iso: '400', type: 'Ч/Б', isBW: true,
        bodyColor: '#38343c', accentColor: '#d6b9c8', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Сюрреалистичный высококонтрастный монохром.',
        grade: { bw: true, bwWeights: [0.30, 0.59, 0.11], exposure: 0.03, contrast: 29, sat: -100, temp: 0, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 22, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'arman_hoenix_200', brand: 'Harman', name: 'Phoenix 200', iso: '200', type: 'Цветная', isBW: false,
        bodyColor: '#e55b28', accentColor: '#ffd264', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Смелые тёплые оттенки и насыщенные красные.',
        grade: { exposure: 0.03, contrast: 20, sat: 23, temp: 17, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 30, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'gfa_recisa_100', brand: 'Agfa', name: 'Precisa CT 100', iso: '100', type: 'Цветная', isBW: false,
        bodyColor: '#ce2b35', accentColor: '#f3d6a1', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Слайдовая насыщенность с глубокими тенями.',
        grade: { exposure: 0.03, contrast: 20, sat: 17, temp: -3, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 11, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } },
      { id: 'olfen_500', brand: 'ORWO', name: 'Wolfen NC500', iso: '500', type: 'Цветная', isBW: false,
        bodyColor: '#36546b', accentColor: '#f7b65a', textColor: '#FFFFFF', capColor: '#16171B',
        desc: 'Приглушённый кинематографичный цвет.',
        grade: { exposure: 0.03, contrast: 12, sat: -15, temp: -7, tint: 0, fade: 5, shadows: 5, highlights: -8, grain: 26, halation: 2, rMul: 1.03, gMul: 1.00, bMul: 0.97, shadowTint: [-4, 3, 6], highTint: [6, 3, -2] } }
    ];
