import { log, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { Token, _TokenPrice } from "../../generated/schema";
import { BIGDECIMAL_ONE } from "./constants";

export function initRegistry(): void {
  log.debug("Initializing token prices registry", []);
  if (_TokenPrice.load("loaded") != null && Token.load("loaded") != null) {
    return;
  }

  const prices = [
    [18806, 10.0, 4.61],
    [18807, 10.89, 4.61],
    [18808, 11.61, 4.68],
    [18809, 12.03, 4.01],
    [18810, 11.23, 3.37],
    [18811, 11.72, 3.4],
    [18812, 11.8, 3.45],
    [18813, 12.22, 3.53],
    [18814, 13.59, 3.69],
    [18815, 13.14, 3.16],
    [18816, 12.93, 2.92],
    [18817, 12.03, 2.44],
    [18818, 13.32, 2.27],
    [18819, 14.43, 2.38],
    [18820, 14.03, 2.31],
    [18821, 13.06, 1.95],
    [18822, 12.01, 1.71],
    [18823, 11.7, 1.48],
    [18824, 11.34, 1.38],
    [18825, 11.23, 1.38],
    [18826, 11.08, 1.35],
    [18827, 11.05, 1.5],
    [18828, 10.02, 1.37],
    [18829, 9.47, 1.28],
    [18830, 10.49, 1.51],
    [18831, 11.36, 1.57],
    [18832, 11.41, 1.59],
    [18833, 11.52, 1.6],
    [18834, 11.57, 1.62],
    [18835, 11.38, 1.67],
    [18836, 11.7, 1.67],
    [18837, 11.58, 1.67],
    [18838, 11.76, 1.72],
    [18839, 12.22, 1.76],
    [18840, 12.71, 1.79],
    [18841, 12.31, 1.71],
    [18842, 12.53, 1.73],
    [18843, 12.16, 1.71],
    [18844, 12.8, 1.75],
    [18845, 13.0, 1.71],
    [18846, 13.57, 1.78],
    [18847, 14.0, 1.83],
    [18848, 13.13, 1.7],
    [18849, 13.62, 1.71],
    [18850, 14.07, 1.79],
    [18851, 14.58, 1.92],
    [18852, 14.03, 1.9],
    [18853, 15.23, 2.12],
    [18854, 15.45, 2.26],
    [18855, 15.74, 2.31],
    [18856, 15.84, 2.27],
    [18857, 16.03, 2.32],
    [18858, 18.32, 2.62],
    [18859, 18.85, 2.8],
    [18860, 18.93, 2.88],
    [18861, 22.28, 3.41],
    [18862, 21.79, 3.31],
    [18863, 21.84, 3.47],
    [18864, 19.83, 3.1],
    [18865, 20.06, 3.14],
    [18866, 18.27, 2.85],
    [18867, 20.36, 3.26],
    [18868, 21.27, 3.35],
    [18869, 21.41, 3.46],
    [18870, 21.95, 3.63],
    [18871, 23.01, 3.74],
    [18872, 25.1, 4.03],
    [18873, 24.25, 3.93],
    [18874, 24.12, 3.96],
    [18875, 24.46, 4.13],
    [18876, 25.73, 4.34],
    [18877, 25.26, 4.38],
    [18878, 21.02, 3.75],
    [18879, 20.44, 3.75],
    [18880, 26.94, 4.87],
    [18881, 29.44, 5.47],
    [18882, 27.17, 5.01],
    [18883, 34.97, 6.62],
    [18884, 35.81, 6.53],
    [18885, 34.33, 6.42],
    [18886, 33.78, 6.29],
    [18887, 36.45, 6.69],
    [18888, 33.38, 6.19],
    [18889, 40.04, 7.07],
    [18890, 43.84, 7.38],
    [18891, 34.02, 5.68],
    [18892, 29.91, 4.97],
    [18893, 39.62, 6.44],
    [18894, 41.88, 6.85],
    [18895, 42.24, 6.73],
    [18896, 39.64, 6.15],
    [18897, 39.39, 5.97],
    [18898, 37.17, 5.65],
    [18899, 33.55, 5.11],
    [18900, 33.72, 4.99],
    [18901, 36.22, 5.34],
    [18902, 37.76, 5.5],
    [18903, 38.71, 5.62],
    [18904, 38.93, 5.59],
    [18905, 36.75, 5.15],
    [18906, 36.95, 5.12],
    [18907, 35.23, 4.99],
    [18908, 36.72, 5.14],
    [18909, 35.05, 5.09],
    [18910, 35.22, 5.03],
    [18911, 32.37, 4.64],
    [18912, 32.02, 4.52],
    [18913, 33.3, 4.59],
    [18914, 34.62, 4.7],
    [18915, 33.76, 4.58],
    [18916, 33.16, 4.42],
    [18917, 33.31, 4.45],
    [18918, 32.44, 4.24],
    [18919, 31.87, 4.09],
    [18920, 34.96, 4.51],
    [18921, 35.97, 4.59],
    [18922, 34.49, 4.48],
    [18923, 34.21, 4.5],
    [18924, 35.83, 4.74],
    [18925, 34.38, 4.53],
    [18926, 35.37, 4.82],
    [18927, 42.95, 5.79],
    [18928, 36.91, 5.33],
    [18929, 38.17, 5.56],
    [18930, 39.42, 5.83],
    [18931, 37.19, 5.39],
    [18932, 37.43, 5.42],
    [18933, 37.47, 5.35],
    [18934, 37.01, 5.39],
    [18935, 38.46, 5.55],
    [18936, 37.51, 5.48],
    [18937, 36.98, 5.51],
    [18938, 36.33, 5.5],
    [18939, 35.79, 6.24],
    [18940, 36.61, 6.7],
    [18941, 35.8, 6.54],
    [18942, 32.15, 5.88],
    [18943, 33.11, 6.17],
    [18944, 32.13, 6.03],
    [18945, 32.67, 6.11],
    [18946, 31.93, 6.01],
    [18947, 31.57, 5.82],
    [18948, 28.57, 5.32],
    [18949, 29.58, 5.5],
    [18950, 26.48, 5.26],
    [18951, 28.21, 5.51],
    [18952, 29.57, 5.76],
    [18953, 31.38, 6.01],
    [18954, 32.17, 6.03],
    [18955, 32.2, 6.17],
    [18956, 29.66, 5.72],
    [18957, 29.66, 5.76],
    [18958, 26.98, 5.25],
    [18959, 26.68, 5.24],
    [18960, 27.36, 5.27],
    [18961, 28.04, 5.32],
    [18962, 27.59, 5.35],
    [18963, 26.62, 5.34],
    [18964, 28.28, 5.29],
    [18965, 32.71, 5.77],
    [18966, 28.05, 5.21],
    [18967, 24.63, 4.68],
    [18968, 24.35, 4.74],
    [18969, 24.29, 4.71],
    [18970, 25.2, 4.95],
    [18971, 22.58, 4.48],
    [18972, 22.66, 4.39],
    [18973, 24.34, 4.53],
    [18974, 24.6, 4.68],
    [18975, 21.76, 4.23],
    [18976, 21.7, 4.29],
    [18977, 22.35, 4.32],
    [18978, 21.79, 4.21],
    [18979, 21.31, 4.05],
    [18980, 23.11, 4.34],
    [18981, 22.19, 4.37],
    [18982, 21.63, 4.46],
    [18983, 23.57, 4.76],
    [18984, 27.36, 5.25],
    [18985, 28.55, 5.8],
    [18986, 26.98, 5.57],
    [18987, 29.49, 5.95],
    [18988, 32.18, 6.11],
    [18989, 29.77, 6.07],
    [18990, 26.78, 5.58],
    [18991, 27.99, 5.56],
    [18992, 30.24, 5.99],
    [18993, 32.51, 6.26],
    [18994, 36.12, 6.94],
    [18995, 35.61, 6.84],
    [18996, 39.35, 7.68],
    [18997, 42.1, 8.19],
    [18998, 39.04, 8.05],
    [18999, 40.21, 8.51],
    [19000, 38.83, 8.37],
    [19001, 36.01, 7.9],
    [19002, 35.1, 8.28],
    [19003, 37.92, 8.55],
    [19004, 38.86, 8.97],
    [19005, 40.25, 9.21],
    [19006, 37.7, 9.12],
    [19007, 40.49, 9.58],
    [19008, 39.28, 9.84],
    [19009, 43.52, 10.71],
    [19010, 39.31, 9.82],
    [19011, 38.35, 9.78],
    [19012, 36.93, 9.57],
    [19013, 39.07, 9.9],
    [19014, 34.35, 8.65],
    [19015, 29.27, 7.72],
    [19016, 34.46, 8.59],
    [19017, 36.1, 8.94],
    [19018, 36.06, 9.04],
    [19019, 32.5, 8.47],
    [19020, 30.18, 7.88],
    [19021, 29.58, 7.67],
    [19022, 29.22, 7.56],
    [19023, 27.29, 7.11],
    [19024, 28.17, 7.7],
    [19025, 29.06, 7.98],
    [19026, 26.41, 7.43],
    [19027, 29.49, 8.05],
    [19028, 31.11, 8.52],
    [19029, 30.88, 8.65],
    [19030, 31.32, 8.98],
    [19031, 31.75, 9.28],
    [19032, 30.53, 8.9],
    [19033, 30.96, 9.06],
    [19034, 29.18, 8.67],
    [19035, 26.56, 8.35],
    [19036, 27.05, 8.35],
    [19037, 26.39, 8.15],
    [19038, 27.22, 8.26],
    [19039, 28.99, 9.03],
    [19040, 28.58, 8.88],
    [19041, 28.02, 8.76],
    [19042, 27.07, 8.8],
    [19043, 26.72, 8.75],
    [19044, 26.29, 8.54],
    [19045, 23.82, 8.02],
    [19046, 24.85, 8.33],
    [19047, 25.31, 8.59],
    [19048, 24.97, 8.67],
    [19049, 27.31, 9.13],
    [19050, 29.79, 9.86],
    [19051, 26.8, 9.03],
    [19052, 31.5, 10.0],
    [19053, 31.14, 10.01],
    [19054, 32.28, 10.69],
    [19055, 34.13, 11.18],
    [19056, 30.53, 10.11],
    [19057, 31.06, 10.43],
    [19058, 28.17, 9.63],
    [19059, 28.45, 9.76],
    [19060, 27.83, 9.4],
    [19061, 30.08, 10.1],
    [19062, 28.06, 9.61],
    [19063, 27.61, 9.4],
    [19064, 27.23, 9.19],
    [19065, 26.34, 8.94],
    [19066, 26.85, 9.12],
    [19067, 26.86, 9.08],
    [19068, 28.98, 9.43],
    [19069, 28.21, 9.24],
    [19070, 28.72, 9.19],
    [19071, 28.64, 9.3],
    [19072, 27.79, 9.04],
    [19073, 27.99, 8.84],
    [19074, 28.03, 8.67],
    [19075, 28.16, 8.66],
    [19076, 29.04, 8.63],
    [19077, 28.13, 8.3],
    [19078, 28.79, 8.26],
    [19079, 29.77, 8.4],
    [19080, 29.36, 8.26],
    [19081, 30.23, 8.34],
    [19082, 30.21, 8.34],
    [19083, 28.86, 8.05],
    [19084, 29.38, 8.1],
    [19085, 31.36, 8.52],
    [19086, 31.93, 8.48],
    [19087, 30.86, 8.21],
    [19088, 29.34, 7.88],
    [19089, 26.85, 7.34],
    [19090, 27.8, 7.34],
    [19091, 26.85, 6.95],
    [19092, 27.3, 6.89],
    [19093, 26.66, 6.72],
    [19094, 23.8, 6.08],
    [19095, 24.75, 6.16],
    [19096, 24.74, 6.17],
    [19097, 23.99, 5.99],
    [19098, 24.14, 5.9],
    [19099, 24.23, 5.83],
    [19100, 23.27, 5.61],
    [19101, 24.09, 5.77],
    [19102, 24.67, 5.85],
    [19103, 24.3, 5.69],
    [19104, 23.33, 5.5],
    [19105, 23.09, 5.34],
    [19106, 23.29, 5.27],
    [19107, 22.33, 5.0],
    [19108, 22.14, 4.89],
    [19109, 20.29, 4.49],
    [19110, 21.5, 4.62],
    [19111, 20.71, 4.43],
    [19112, 19.46, 4.2],
    [19113, 17.94, 3.91],
    [19114, 18.03, 3.82],
    [19115, 17.82, 3.78],
    [19116, 17.6, 3.82],
    [19117, 19.92, 4.17],
    [19118, 17.85, 3.87],
    [19119, 17.74, 3.8],
    [19120, 16.5, 3.56],
    [19121, 15.68, 3.38],
    [19122, 12.8, 2.6],
    [19123, 13.61, 2.57],
    [19124, 10.85, 2.28],
    [19125, 9.75, 1.7],
    [19126, 10.27, 1.45],
    [19127, 10.88, 1.54],
    [19128, 12.36, 1.76],
    [19129, 11.03, 1.6],
    [19130, 11.51, 1.65],
    [19131, 10.09, 1.46],
    [19132, 10.93, 1.57],
    [19133, 11.22, 1.72],
    [19134, 11.1, 1.75],
    [19135, 11.43, 1.79],
    [19136, 11.16, 1.77],
    [19137, 11.09, 1.69],
    [19138, 10.72, 1.59],
    [19139, 9.68, 1.44],
    [19140, 9.26, 1.32],
    [19141, 9.44, 1.35],
    [19142, 9.61, 1.36],
    [19143, 10.52, 1.43],
    [19144, 10.31, 1.38],
    [19145, 9.37, 1.26],
    [19146, 9.64, 1.27],
    [19147, 9.18, 1.22],
    [19148, 9.25, 1.22],
    [19149, 9.18, 1.2],
    [19150, 9.47, 1.19],
    [19151, 9.25, 1.18],
    [19152, 8.78, 1.13],
    [19153, 8.78, 1.17],
    [19154, 8.1, 1.26],
    [19155, 7.54, 1.3],
    [19156, 7.13, 0.9],
    [19157, 6.47, 0.8],
    [19158, 6.38, 0.78],
    [19159, 7.31, 0.84],
    [19160, 6.32, 0.76],
    [19161, 6.41, 0.76],
    [19162, 6.1, 0.72],
    [19163, 6.77, 0.78],
    [19164, 6.84, 0.76],
    [19165, 6.93, 0.77],
    [19166, 7.09, 0.77],
    [19167, 8.16, 0.87],
    [19168, 8.34, 0.89],
    [19169, 8.67, 0.92],
    [19170, 8.05, 0.87],
    [19171, 7.79, 0.83],
    [19172, 7.32, 0.79],
    [19173, 7.37, 0.78],
    [19174, 7.48, 0.77],
    [19175, 8.13, 0.81],
    [19176, 8.08, 0.8],
    [19177, 8.12, 0.8],
    [19178, 8.77, 0.84],
    [19179, 8.97, 0.86],
    [19180, 8.91, 0.85],
    [19181, 9.4, 0.88],
    [19182, 9.12, 0.86],
    [19183, 8.99, 0.85],
    [19184, 8.81, 0.83],
    [19185, 8.19, 0.78],
    [19186, 7.83, 0.76],
    [19187, 8.17, 0.78],
    [19188, 8.98, 0.86],
    [19189, 9.05, 0.87],
    [19190, 9.22, 0.89],
    [19191, 8.92, 0.86],
    [19192, 9.58, 0.92],
    [19193, 10.56, 0.97],
    [19194, 9.68, 0.92],
    [19195, 11.07, 1.0],
    [19196, 10.67, 0.99],
    [19197, 10.12, 0.96],
    [19198, 10.01, 0.96],
    [19199, 9.05, 0.9],
    [19200, 9.21, 0.9],
    [19201, 10.32, 1.0],
    [19202, 10.87, 1.05],
    [19203, 11.22, 1.08],
    [19204, 10.69, 1.04],
    [19205, 10.4, 1.03],
    [19206, 10.47, 1.04],
    [19207, 9.98, 1.01],
    [19208, 10.18, 1.02],
    [19209, 10.42, 1.04],
    [19210, 10.95, 1.09],
    [19211, 10.65, 1.08],
    [19212, 11.38, 1.13],
    [19213, 11.81, 1.17],
    [19214, 11.43, 1.14],
    [19215, 11.96, 1.18],
    [19216, 11.76, 1.17],
    [19217, 12.09, 1.2],
    [19218, 11.92, 1.2],
    [19219, 11.61, 1.18],
    [19220, 11.42, 1.16],
    [19221, 11.44, 1.18],
    [19222, 11.73, 1.2],
    [19223, 11.54, 1.19],
    [19224, 10.81, 1.13],
    [19225, 10.26, 1.1],
    [19226, 10.68, 1.13],
    [19227, 11.06, 1.13],
    [19228, 12.14, 1.2],
    [19229, 13.01, 1.23],
    [19230, 12.88, 1.27],
    [19231, 11.53, 1.17],
    [19232, 11.26, 1.15],
    [19233, 10.63, 1.12],
    [19234, 11.45, 1.15],
    [19235, 11.92, 1.18],
    [19236, 11.8, 1.18],
    [19237, 12.75, 1.23],
    [19238, 12.63, 1.22],
    [19239, 12.62, 1.2],
    [19240, 12.94, 1.22],
    [19241, 12.65, 1.2],
    [19242, 11.83, 1.15],
    [19243, 12.97, 1.23],
    [19244, 13.86, 1.29],
    [19245, 16.05, 1.4],
    [19246, 16.05, 1.44],
    [19247, 15.67, 1.41],
    [19248, 15.49, 1.41],
    [19249, 13.93, 1.28],
    [19250, 14.03, 1.3],
    [19251, 14.88, 1.34],
    [19252, 16.62, 1.42],
    [19253, 16.49, 1.43],
    [19254, 14.77, 1.33],
    [19255, 15.69, 1.36],
    [19256, 13.95, 1.23],
    [19257, 13.48, 1.19],
    [19258, 14.66, 1.25],
    [19259, 14.24, 1.23],
    [19260, 13.66, 1.19],
    [19261, 14.08, 1.2],
    [19262, 13.9, 1.18],
    [19263, 13.54, 1.17],
    [19264, 13.06, 1.13],
    [19265, 12.8, 1.1],
    [19266, 13.01, 1.1],
    [19267, 12.67, 1.08],
    [19268, 12.05, 1.06],
    [19269, 12.89, 1.09],
    [19270, 13.02, 1.1],
    [19271, 12.98, 1.09],
    [19272, 12.99, 1.08],
    [19273, 12.86, 1.09],
    [19274, 13.12, 1.13],
    [19275, 13.21, 1.13],
    [19276, 12.47, 1.11],
    [19277, 12.17, 1.09],
    [19278, 11.75, 1.11],
    [19279, 11.4, 1.15],
    [19280, 11.65, 1.18],
    [19281, 11.54, 1.18],
    [19282, 11.72, 1.18],
    [19283, 12.45, 1.23],
    [19284, 12.55, 1.21],
    [19285, 11.78, 1.16],
    [19286, 11.38, 1.14],
    [19287, 11.75, 1.16],
    [19288, 11.72, 1.17],
    [19289, 12.12, 1.2],
    [19290, 11.65, 1.18],
    [19291, 12.01, 1.22],
    [19292, 12.29, 1.27],
    [19293, 12.7, 1.3],
    [19294, 13.52, 1.63],
    [19295, 13.45, 1.53],
    [19296, 13.93, 1.53],
    [19297, 14.31, 1.58],
    [19298, 14.12, 1.55],
    [19299, 13.31, 1.48],
    [19300, 13.49, 1.51],
    [19301, 15.04, 1.62],
    [19302, 15.4, 1.64],
    [19303, 14.48, 1.56],
    [19304, 14.28, 1.54],
    [19305, 12.19, 1.35],
    [19306, 9.71, 1.07],
    [19307, 12.19, 1.29],
    [19308, 11.74, 1.23],
    [19309, 10.94, 1.18],
    [19310, 10.21, 1.12],
    [19311, 10.32, 1.15],
    [19312, 10.56, 1.18],
    [19313, 10.18, 1.13],
    [19314, 9.93, 1.11],
  ];

  if (!_TokenPrice.load("loaded")) {
    const priceLoaded = new _TokenPrice("loaded");
    priceLoaded.save();

    for (let i = 0; i < prices.length; i++) {
      let tokenPrice = _TokenPrice.load((prices[i][0] as i32).toString());

      if (!tokenPrice) {
        tokenPrice = new _TokenPrice((prices[i][0] as i32).toString());
        tokenPrice.cosmos = BigDecimal.fromString(prices[i][1].toString());
        tokenPrice.osmosis = BigDecimal.fromString(prices[i][2].toString());
        tokenPrice.save();
      }
    }
  }

  const tokens = [
    ["uosmo", "Osmosis", "OSMO", "6", "0"],
    ["uion", "Ion", "ION", "6", "0"],
    [
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      "Cosmos",
      "ATOM",
      "6",
      "0",
    ],
    [
      "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
      "Akash Network",
      "AKT",
      "6",
      "0",
    ],
    [
      "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
      "Persistence",
      "XPRT",
      "6",
      "0",
    ],
    [
      "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
      "PSTAKE",
      "PSTAKE",
      "18",
      "0",
    ],
    [
      "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
      "IRISnet",
      "IRIS",
      "6",
      "0",
    ],
    [
      "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
      "Sentinel",
      "DVPN",
      "6",
      "0",
    ],
    [
      "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
      "Cronos",
      "CRO",
      "8",
      "0",
    ],
    [
      "ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D",
      "Wrapped BNB",
      "WBNB.axl",
      "18",
      "0",
    ],
    [
      "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
      "Regen Network",
      "REGEN",
      "6",
      "0",
    ],
    [
      "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
      "Starname",
      "IOV",
      "6",
      "0",
    ],
    [
      "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
      "Microtick",
      "TICK",
      "6",
      "0",
    ],
    [
      "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
      "e-Money",
      "NGM",
      "6",
      "0",
    ],
    [
      "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
      "e-Money EUR",
      "EEUR",
      "6",
      "0",
    ],
    [
      "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
      "BitCanna",
      "BCNA",
      "6",
      "0",
    ],
    [
      "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
      "Juno",
      "JUNO",
      "6",
      "0",
    ],
    [
      "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
      "IXO",
      "IXO",
      "6",
      "0",
    ],
    [
      "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
      "LikeCoin",
      "LIKE",
      "9",
      "0",
    ],
    [
      "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
      "Luna Classic",
      "LUNC",
      "6",
      "0",
    ],
    [
      "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
      "TerraClassicUSD",
      "USTC",
      "6",
      "1",
    ],
    [
      "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
      "TerraClassicKRW",
      "KRTC",
      "6",
      "0",
    ],
    [
      "ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9",
      "Luna",
      "LUNA",
      "6",
      "0",
    ],
    [
      "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
      "BitSong",
      "BTSG",
      "6",
      "0",
    ],
    [
      "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
      "Ki",
      "XKI",
      "6",
      "0",
    ],
    [
      "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
      "Secret Network",
      "SCRT",
      "6",
      "0",
    ],
    [
      "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
      "MediBloc",
      "MED",
      "6",
      "0",
    ],
    [
      "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
      "Bostrom",
      "BOOT",
      "0",
      "0",
    ],
    [
      "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
      "Comdex",
      "CMDX",
      "6",
      "0",
    ],
    [
      "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
      "Cheqd",
      "CHEQ",
      "9",
      "0",
    ],
    [
      "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
      "Stargaze",
      "STARS",
      "6",
      "0",
    ],
    [
      "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
      "Lum",
      "LUM",
      "6",
      "0",
    ],
    [
      "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
      "Chihuahua",
      "HUAHUA",
      "6",
      "0",
    ],
    [
      "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
      "Vidulum",
      "VDL",
      "6",
      "0",
    ],
    [
      "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
      "Desmos",
      "DSM",
      "6",
      "0",
    ],
    [
      "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
      "Dig Chain",
      "DIG",
      "6",
      "0",
    ],
    [
      "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
      "Sifchain Rowan",
      "ROWAN",
      "18",
      "0",
    ],
    [
      "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
      "Sommelier",
      "SOMM",
      "6",
      "0",
    ],
    [
      "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
      "Band Protocol",
      "BAND",
      "6",
      "0",
    ],
    [
      "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
      "Konstellation",
      "DARC",
      "6",
      "0",
    ],
    [
      "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
      "Umee",
      "UMEE",
      "6",
      "0",
    ],
    [
      "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
      "Graviton",
      "GRAV",
      "6",
      "0",
    ],
    [
      "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
      "Fetch.ai",
      "FET",
      "18",
      "0",
    ],
    [
      "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
      "Neta",
      "NETA",
      "6",
      "0",
    ],
    [
      "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
      "Marble",
      "MARBLE",
      "3",
      "0",
    ],
    [
      "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
      "Hope Galaxy",
      "HOPE",
      "6",
      "0",
    ],
    [
      "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
      "Decentr",
      "DEC",
      "6",
      "0",
    ],
    [
      "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
      "Carbon",
      "SWTH",
      "8",
      "0",
    ],
    [
      "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
      "Cerberus",
      "CRBRUS",
      "6",
      "0",
    ],
    [
      "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
      "Injective",
      "INJ",
      "18",
      "0",
    ],
    [
      "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
      "Racoon",
      "RAC",
      "6",
      "0",
    ],
    [
      "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
      "DHK",
      "DHK",
      "0",
      "0",
    ],
    [
      "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
      "Tether USD",
      "USDT.axl",
      "6",
      "1",
    ],
    [
      "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
      "USD Coin",
      "USDC.axl",
      "6",
      "1",
    ],
    [
      "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
      "Frax",
      "FRAX.axl",
      "18",
      "0",
    ],
    [
      "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
      "Dai Stablecoin",
      "DAI.axl",
      "18",
      "1",
    ],
    [
      "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
      "Wrapped Ether",
      "WETH.axl",
      "18",
      "0",
    ],
    [
      "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
      "Wrapped Bitcoin",
      "WBTC.axl",
      "8",
      "0",
    ],
    [
      "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5",
      "Wrapped Ethereum",
      "WETH.grv",
      "18",
      "0",
    ],
    [
      "ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796",
      "Wrapped Bitcoin",
      "WBTC.grv",
      "8",
      "0",
    ],
    [
      "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E",
      "USD Coin",
      "USDC.grv",
      "6",
      "1",
    ],
    [
      "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5",
      "Dai Stablecoin",
      "DAI.grv",
      "18",
      "1",
    ],
    [
      "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
      "AssetMantle",
      "MNTL",
      "6",
      "0",
    ],
    [
      "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
      "Provenance",
      "HASH",
      "9",
      "0",
    ],
    [
      "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
      "Galaxy",
      "GLX",
      "6",
      "0",
    ],
    [
      "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
      "Block",
      "BLOCK",
      "6",
      "0",
    ],
    [
      "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
      "JunoSwap",
      "RAW",
      "6",
      "0",
    ],
    [
      "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
      "Meme",
      "MEME",
      "6",
      "0",
    ],
    [
      "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
      "Another.Software Validator Token",
      "ASVT",
      "6",
      "0",
    ],
    [
      "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
      "Evmos",
      "EVMOS",
      "18",
      "0",
    ],
    [
      "ibc/49C2B2C444B7C5F0066657A4DBF19D676E0D185FF721CFD3E14FA253BCB9BC04",
      "Echelon",
      "ECH",
      "18",
      "0",
    ],
    [
      "ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484",
      "JoeDAO",
      "JOE",
      "6",
      "0",
    ],
    [
      "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205",
      "Kava",
      "KAVA",
      "6",
      "0",
    ],
    [
      "ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4",
      "GenesisL1",
      "L1",
      "18",
      "0",
    ],
    [
      "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219",
      "Atolo",
      "ATOLO",
      "6",
      "0",
    ],
    [
      "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
      "Tgrade",
      "TGD",
      "6",
      "0",
    ],
    [
      "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B",
      "ODIN",
      "ODIN",
      "6",
      "0",
    ],
    [
      "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
      "GEO",
      "GEO",
      "6",
      "0",
    ],
    [
      "ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D",
      "O9W",
      "O9W",
      "6",
      "0",
    ],
    [
      "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3",
      "Shentu",
      "CTK",
      "6",
      "0",
    ],
    [
      "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
      "Kuji",
      "KUJI",
      "6",
      "0",
    ],
    [
      "ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC",
      "USK",
      "USK",
      "6",
      "0",
    ],
    [
      "ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC",
      "Hard",
      "HARD",
      "6",
      "0",
    ],
    [
      "ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5",
      "Swap",
      "SWP",
      "6",
      "0",
    ],
    [
      "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE",
      "USDX",
      "USDX",
      "6",
      "1",
    ],
    [
      "ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805",
      "Tether USD",
      "USDT.grv",
      "6",
      "1",
    ],
    [
      "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
      "Chainlink",
      "LINK.axl",
      "18",
      "0",
    ],
    [
      "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE",
      "Aave",
      "AAVE.axl",
      "18",
      "0",
    ],
    [
      "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4",
      "ApeCoin",
      "APE.axl",
      "18",
      "0",
    ],
    [
      "ibc/6C0CB8653012DC2BC1820FD0B6B3AFF8A07D18630BDAEE066FEFB2D92F477C24",
      "Axie Infinity Shard",
      "AXS.axl",
      "18",
      "0",
    ],
    [
      "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
      "Maker",
      "MKR.axl",
      "18",
      "0",
    ],
    [
      "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E",
      "Rai Reflex Index",
      "RAI.axl",
      "18",
      "0",
    ],
    [
      "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2",
      "Shiba Inu",
      "SHIB.axl",
      "18",
      "0",
    ],
    [
      "ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161",
      "Uniswap",
      "UNI.axl",
      "18",
      "0",
    ],
    [
      "ibc/B901BEC1B71D0573E6EE874FEC39E2DF4C2BDB1DB74CB3DA0A9CACC4A435B0EC",
      "Chain",
      "XCN.axl",
      "18",
      "0",
    ],
    [
      "ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121",
      "Lvn",
      "LVN",
      "6",
      "0",
    ],
    [
      "ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49",
      "Wrapped GLMR",
      "WGLMR.axl",
      "18",
      "0",
    ],
    [
      "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
      "DOT",
      "DOT.axl",
      "10",
      "0",
    ],
    [
      "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
      "Gelotto",
      "GLTO",
      "6",
      "0",
    ],
    [
      "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
      "GKey",
      "GKEY",
      "6",
      "0",
    ],
    [
      "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580",
      "Crescent",
      "CRE",
      "6",
      "0",
    ],
    [
      "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
      "LumenX",
      "LUMEN",
      "6",
      "0",
    ],
    [
      "ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D",
      "Oraichain",
      "ORAI",
      "6",
      "0",
    ],
    [
      "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
      "Agoric",
      "BLD",
      "6",
      "0",
    ],
    [
      "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
      "Inter Protocol USD",
      "IST",
      "6",
      "1",
    ],
    [
      "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
      "Cudos",
      "CUDOS",
      "18",
      "0",
    ],
    [
      "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE",
      "USDX",
      "USDX",
      "6",
      "1",
    ],
    [
      "ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B",
      "StakeEasy seJUNO",
      "seJUNO",
      "6",
      "0",
    ],
    [
      "ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3",
      "StakeEasy bJUNO",
      "bJUNO",
      "6",
      "0",
    ],
    [
      "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
      "Stride",
      "STRD",
      "6",
      "0",
    ],
    [
      "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
      "Stride Staked Atom",
      "stATOM",
      "6",
      "0",
    ],
    [
      "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
      "Stride Staked Stars",
      "stSTARS",
      "6",
      "0",
    ],
    [
      "ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C",
      "Solarbank DAO",
      "SOLAR",
      "6",
      "0",
    ],
    [
      "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
      "StakeEasy SEASY",
      "SEASY",
      "6",
      "0",
    ],
    [
      "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
      "Axelar",
      "AXL",
      "6",
      "0",
    ],
    [
      "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
      "Rebuschain",
      "REBUS",
      "18",
      "0",
    ],
    [
      "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
      "teritori",
      "TORI",
      "6",
      "0",
    ],
    [
      "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE",
      "Stride Juno",
      "stJUNO",
      "6",
      "0",
    ],
    [
      "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB",
      "Lambda",
      "LAMB",
      "18",
      "0",
    ],
    [
      "ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F",
      "MUSE",
      "MUSE",
      "6",
      "0",
    ],
    [
      "ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC",
      "Unification",
      "FUND",
      "9",
      "0",
    ],
    [
      "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA",
      "Jackal",
      "JKL",
      "6",
      "0",
    ],
    [
      "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
      "Stride Staked osmo",
      "stOSMO",
      "6",
      "0",
    ],
  ];

  if (!Token.load("loaded")) {
    const tokenLoaded = new Token("loaded");
    tokenLoaded.name = "loaded";
    tokenLoaded.symbol = "loaded";
    tokenLoaded.decimals = 18;
    tokenLoaded.save();

    for (let i = 0; i < tokens.length; i++) {
      const denom = tokens[i][0].toString();
      let token = Token.load(denom);
      if (!token) {
        token = new Token(denom);
        token.name = tokens[i][1].toString();
        token.symbol = tokens[i][2].toString();
        token.decimals = BigInt.fromString(tokens[i][3].toString()).toI32();
        token._isStableCoin = false;
        if (tokens[i][4].toString() == "1") {
          token._isStableCoin = true;
          token.lastPriceUSD = BIGDECIMAL_ONE;
        }
        token.save();
      }
    }
  }
}
