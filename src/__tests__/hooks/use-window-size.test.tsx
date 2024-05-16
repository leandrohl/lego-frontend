import { act, renderHook } from '@testing-library/react';

import { useWindowSize } from '../../hooks/useWindowSize';

describe('render useWindowSize', () => {
  test('useWindowSize', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.widthScreen).toBe(window.innerWidth);
    expect(result.current.heightScreen).toBe(window.innerHeight);

    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.widthScreen).toBe(800);
    expect(result.current.heightScreen).toBe(600);
  });
});
