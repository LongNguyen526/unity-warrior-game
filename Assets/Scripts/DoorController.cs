using UnityEngine;

public class DoorController : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    public Animator[] doorAnimators;
    public GameObject[] enemies;

    private bool doorClosed = false;

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player") && !doorClosed)
        {
            foreach (Animator anim in doorAnimators)
            {
                anim.SetTrigger("Close");
            }

            doorClosed = true;
        }
    }

    private void Update()
    {
        if (doorClosed && AllEnemiesDefeated())
        {
            foreach (Animator anim in doorAnimators)
            {
                anim.SetTrigger("Open");
            }
            Destroy(gameObject); // Xoá trigger phòng để không kích hoạt lại
        }
    }

    private bool AllEnemiesDefeated()
    {
        foreach (var enemy in enemies)
        {
            if (enemy != null) return false;
        }
        return true;
    }
}
