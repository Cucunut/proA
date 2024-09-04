import matplotlib.pyplot as plt
import numpy as np

# Tạo dữ liệu cho hình lửa
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x) * np.cos(x)

# Tạo biểu đồ
plt.figure(figsize=(8, 6))
plt.plot(x, y, color='orange', linewidth=2)

# Tạo hiệu ứng lửa
for i in range(1, 10):
    plt.plot(x, y + i * 0.1, color='orange', alpha=0.1 * i)

# Tùy chỉnh biểu đồ
plt.fill_between(x, y, color='orange', alpha=0.3)
plt.title('Hình Lửa')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True)

# Hiển thị biểu đồ
plt.show()
