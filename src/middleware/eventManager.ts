type eventType = {
  error: string;
};

class EventManager<Events extends Record<string, any>> {
  private listeners: {
    [K in keyof Events]?: ((payload: Events[K]) => void)[];
  } = {};

  on<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]!.push(listener);
  }

  off<K extends keyof Events>(
    event: K,
    listener: (payload: Events[K]) => void
  ) {
    this.listeners[event] = (this.listeners[event] || []).filter(
      (l) => l !== listener
    );
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]) {
    (this.listeners[event] || []).forEach((listener) => listener(payload));
  }
}

export const eventBus = new EventManager<eventType>();
export type { eventType };
